import React, { Component, Fragment } from 'react'
import { SINGLE_CLIENT_QUERY } from './SingleClient'
import { Query } from 'react-apollo'
import Link from 'next/link'
import { format } from 'date-fns'
import AddToCart from './AddToCart'
import posed from 'react-pose'
import styled from 'styled-components'

const StatsDisplay = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 1;
  background-color: rgba(220, 220, 220, 0.3);
  padding-left: 5px;
  padding-top: 5px;
  width: 100%;
  height: 100%;
  border: 5px solid white;
  border-radius: 25px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
`
const Flexer = styled.div`
  display: flex;
  flex-flow: column;
  .gear {
    position: absolute;
    height: 25px;
    width: 25px;
    left: 215px;
    margin-top: 10px;
  }
  .center {
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    height: 299px;
    width: 250px;
    background: #fff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  }

  .profile {
    width: 100%;
    height: 300px;
    text-align: center;
  }
  .profile .image {
    position: relative;
    width: 70px;
    height: 70px;
    margin: 38px auto 0 auto;
  }
  .profile .image .circle-1,
  .profile .image .circle-2 {
    position: absolute;
    box-sizing: border-box;
    width: 76px;
    height: 76px;
    top: -3px;
    left: -3px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(100, 120, 240, 1) rgba(100, 120, 240, 1)
      rgba(100, 120, 240, 1) transparent;
    border-radius: 50%;
    transition: all 1.5s ease-in-out;
  }
  .profile .image .circle-2 {
    width: 82px;
    height: 82px;
    top: -6px;
    left: -6px;
    border-color: rgba(100, 120, 240, 1) transparent rgba(100, 120, 240, 1)
      rgba(100, 120, 240, 1);
  }
  .profile .image img {
    display: block;
    border-radius: 50%;
    background: #f5e8df;
  }
  .profile .image:hover {
    cursor: pointer;
  }
  .profile .image:hover .circle-1,
  .profile .image:hover .circle-2 {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  .profile .image:hover .circle-2 {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }

  .stats {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 35px;
    height: 100px;
    color: white;
    justify-content: center;
    align-content: center;
    align-items: center;
    background: rgba(100, 120, 240, 1);
    text-align: center;
  }
`
const Cake = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
const Stat = styled.div`
  font-size: 12px;
`

const StyledTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
  display: block;
  text-align: center;
  font-size: 19px;
  line-height: 28px;
  color: rgba(100, 120, 240, 1);
`
const StyledSub = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`

const Gear = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  },
})

class ClientStats extends React.Component {
  render() {
    return (
      <StatsDisplay>
        <Query
          query={SINGLE_CLIENT_QUERY}
          variables={{
            id: this.props.id,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <Error error={error} />
            if (!data.client) return <p>No Client Found for {this.props.id}</p>
            const client = data.client
            return (
              <Fragment>
                <Flexer>
                  <div className="center">
                    <Link
                      href={{
                        pathname: 'update',
                        query: { id: this.props.id },
                      }}
                    >
                      <a>
                        <Gear
                          className="gear"
                          src="../static/img/gear.png"
                          alt="client update"
                        />
                      </a>
                    </Link>
                    <div className="profile">
                      <div className="image">
                        <div className="circle-1" />
                        <div className="circle-2" />
                        <img
                          src="http://100dayscss.com/codepen/jessica-potter.jpg"
                          width="70"
                          height="70"
                          alt="Jessica Potter"
                        />
                      </div>
                      <StyledTitle>
                        {client.firstName} {client.lastName}
                      </StyledTitle>
                      <StyledSub>{client.cellPhone}</StyledSub>

                      <div className="stats">
                        <div className="box">
                          <Stat>
                            <span>
                              <Cake
                                src="../static/img/cake.png"
                                alt="birthday cake"
                              />
                            </span>
                            {format(client.birthDay, 'MMMM d, YYYY', {
                              awareOfUnicodeTokens: true,
                            })}
                          </Stat>
                        </div>
                      </div>
                    </div>
                  </div>

                  <AddToCart id={this.props.id} />
                </Flexer>
              </Fragment>
            )
          }}
        </Query>
      </StatsDisplay>
    )
  }
}

export default ClientStats
