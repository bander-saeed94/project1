'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  robot.hear(/hello/i, (res) => {
    res.send('Hi')
  })
  
  robot.topic((res) => {
    res.send(`${res.message.text}? That’s a Paddlin`)
  })
  
  const enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  const leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  
  robot.enter((res) => {
    res.send(res.random(enterReplies))
  })
  robot.leave((res) => {
    res.send(res.random(leaveReplies))
  })
  
  
  robot.respond(/you are a little slow/, (res) => {
    setTimeout(() => res.send('Who you calling "slow"?'), 60 * 1000)
  })
  
  robot.respond(/How are you/i, (response) => {
    // Get number of sodas had (coerced to a number).
    let date = new Date()
    if(date.getDate() > 15)
      response.reply('Fine, what about you')
    else 
      response.reply('Not that good')
  })
  
}
