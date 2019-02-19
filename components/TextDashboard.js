// import React, { Component } from 'react'
// import styled from 'styled-components'
// import User from './User'
// import DayName from './DayName'
// import TimePicker from './TimePicker'

// const StyledDashboard = styled.div`
//   position: relative;
//   display: grid;
//   grid-row: 1/3;
//   grid-column: 3;
//   grid-template-rows: 1fr 80%;
//   grid-template-columns: 1fr;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(220, 220, 220, 0.3);
//   border-radius: 25px;
//   z-index: -1;
//   box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
//   /* background: rgba(0, 0, 0, 0.04); */
//   border: 5px solid white;
// `
// const Flex = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   .flexChild {
//     display: flex;
//   }
// `
// const Flexer = styled.div`
//   display: flex;
//   flex-flow: column;
//   .center {
//     margin: 0 20px;
//   }
// `
// const Logo = styled.img`
//   margin-top: 15px;
//   margin-right: 15px;
// `

// const ButtonRow = styled.div`
//   display: flex;
//   width: 100%;
//   height: 50px;
//   align-items: center;
//   justify-content: space-evenly;
// `

// const RemIcon = styled.div`
//   display: flex;
//   padding: 20px;
//   background: blueviolet;
//   border-radius: 50%;
// `
// const DateSelector = styled.div`
//   position: absolute;
//   bottom: 400px;
//   right: 16px;
//   display: grid;
//   width: 89%;
//   min-height: 135px;
//   grid-template-rows: 35px 1fr;
//   margin-top: 75px;
//   box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
//   background: white;
//   align-self: center;
//   .month {
//     width: 100%;
//     display: flex;
//     height: 35px;
//     background: rgba(50, 150, 250, 0.6);
//     grid-row: 1;
//     align-content: center;
//     align-items: center;
//     justify-content: center;
//     color: blueviolet;
//   }
// `

// const Day = styled.div`
//   display: flex;
//   grid-row: 2;
//   flex-flow: row wrap;
//   align-content: center;
//   justify-content: center;
//   .days {
//     display: flex;
//     margin: 3px;
//     width: 30px;
//     height: 30px;
//     background: lightskyblue;
//     outline: none;
//     border: none;
//     &:hover {
//       background: lavender;
//     }
//     &:active {
//       background: lavender;
//     }
//   }
// `

// class TextDashboard extends Component {
//   render() {
//     return (
//       <User>
//         {({ data: { me } }) => (
//           <StyledDashboard>
//             <Flex>
//               <Logo
//                 className="flexChild"
//                 src="../static/img/perfectdayreminders.png"
//                 alt="perfect day reminders"
//                 width="100px"
//                 height="100px"
//               />
//             </Flex>
//             <Flexer>
//               {/* <ButtonRow>
//                 <RemIcon>1</RemIcon>
//                 <RemIcon>2</RemIcon>
//                 <RemIcon>3</RemIcon>
//                 <RemIcon>4</RemIcon>
//               </ButtonRow> */}
//               <DateSelector>
//                 <div className="month">January</div>
//                 <Day>
//                   <DayName weekDay="Su" />
//                   <DayName weekDay="Mo" />
//                   <DayName weekDay="Tu" />
//                   <DayName weekDay="We" />
//                   <DayName weekDay="Th" />
//                   <DayName weekDay="Fr" />
//                   <DayName weekDay="Sa" />

//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />

//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                   <button className="days" />
//                 </Day>
//               </DateSelector>
//               <TimePicker />
//             </Flexer>
//           </StyledDashboard>
//         )}
//       </User>
//     )
//   }
// }

// export default TextDashboard
