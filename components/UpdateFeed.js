import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { postsPerPage } from '../config'
import { ALL_POSTS_QUERY } from './SingleDay'
import gql from 'graphql-tag'
import ReactFileReader from 'react-file-reader'
import Error from './ErrorMessage'

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION($message: String, $file: String) {
    createPost(message: $message, file: $file) {
      id
      message
      file
      user {
        id
      }
      createdAt
      updatedAt
    }
  }
`

const Feed = styled.div`
  flex-flow: column;
  background: #3d5866;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  /* border: 5px solid rgba(61, 58, 62, 0.5); */
  border-radius: 5px 5px 5px 5px;
  z-index: -1;
  width: 95%;

  margin: 0 auto;
  .button {
    display: flex;
  }
`

const Title = styled.h2`
  text-align: center;
  color: white;
`
const Textarea = styled.textarea`
  border: none;
  position: relative;
  display: flex;
  align-self: center;
  padding: 5px 10px;
  margin: 0px auto;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  height: 100px;
  outline: none;
  resize: none;
  font-size: 16px;
`

const Send = styled.button`
  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  display: flex;
  border: none;
  margin: 10px auto;
  padding: 5px 10px;
  font-size: 2rem;

  font-size: 1.8rem;
  border-radius: 5px;
  z-index: 999;
  outline: none;
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  &:active {
    box-shadow: none;
  }

  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    transform: scale(1.1);
  }
`
const sampleData = `
Sample Display,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Upload .csv Files Then Click Post,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`
class UpdateFeed extends React.Component {
  state = { message: '', csvData: null }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  handleFiles = files => {
    const reader = new FileReader()
    reader.onload = () => {
      this.setState({ csvData: reader.result })
    }
    reader.readAsText(files[0])
  }

  render() {
    const tooShort = this.state.message.length < 1

    return (
      <>
        <Feed>
          <Title>Admin Feed Update</Title>

          <Mutation
            mutation={CREATE_POST_MUTATION}
            variables={{
              message: this.state.message,
              file: this.state.csvData,
            }}
            refetchQueries={[
              {
                query: ALL_POSTS_QUERY,
                variables: {
                  skip: this.props.page * postsPerPage - postsPerPage,
                  first: 10,
                },
              },
            ]}
          >
            {(createPost, { error, loading, called }) => {
              if (error) return <Error error={error} />
              if (loading) return <p style={{ color: 'white' }}>loading...</p>
              return (
                <>
                  <form
                    onSubmit={async e => {
                      e.preventDefault()
                      const res = await createPost()
                      console.log(res)
                      this.setState({ message: '' })
                    }}
                  >
                    {' '}
                    <ReactFileReader
                      handleFiles={this.handleFiles}
                      multipleFiles={false}
                      fileTypes={['.csv']}
                    >
                      <a className="btn">Upload .csv File</a>
                    </ReactFileReader>
                    <Textarea
                      name="message"
                      id="message"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.message}
                      placeholder="Send a message or announcement to the Everydata Feed..."
                    />
                    <Send
                      aria-busy={loading}
                      disabled={tooShort || loading}
                      className="button"
                      type="submit"
                    >
                      Post to Feed
                    </Send>
                  </form>
                </>
              )
            }}
          </Mutation>
        </Feed>
      </>
    )
  }
}

export default UpdateFeed
export { CREATE_POST_MUTATION }
