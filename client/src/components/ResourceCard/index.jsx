import React from 'react'


const datas = [
  {
    name: 'Community Fridge Slack Channel',
    picture: 'http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png',
    info:
      'Through the Slack channel you can connect with others in your area and coordinate how best to serve your community.',
    link:
      'https://join.slack.com/t/freedgelearningnet/shared_invite/zt-jg4hh9gw-2pBz64x5Jbnoz0Jjc~wS7w'
  },
  {
    name: 'Apply for a mini grant',
    picture:
      'https://i0.wp.com/www.okcps.org/cms/lib/OK01913268/Centricity/Domain/108/Grants/Apply%20for%20a%20Grant.png?resize=297%2C217&ssl=1',
    info:
      'Mini grants are available to those looking to start their own community fridge',
    link:
      'https://docs.google.com/forms/d/e/1FAIpQLScv-7v2BdwyZQ4s7UXOioSqs3HXntpmrBbM45ePxWQA1Go5RA/viewform?usp=sf_link'
  },
  {
    name: 'Food Safety guidelines',
    picture:
      'https://lowrysolutions.com/wp-content/uploads/2017/03/Food-Safety-Stamp.png',
    info:
      'Implementing good, safe practices will ensure you are doing all you can to avoid getting anyone sick. Food safety plays an important role in the reputation of an establishment.  ',
    link: 'https://www.cdc.gov/foodsafety/keep-food-safe.html'
  },
  {
    name: 'Food Safety guidelines',
    picture: 'http://jmderby.com/wp-content/uploads/2016/01/Know-the-rules.jpg',
    info:
      'Here you will find printable resources that can be used to inform members of the community about your fridge rules and regulations of your fridge. ',
    link: 'https://freedge.wixsite.com/freedge/copy-of-get-help'
  }
]

const index = () => {
  return (
    <>
      {datas.map(data => (
        <div className='col s4'>
          <div className='card'>
            <div className='card-image'>
              <img src={data.picture} />
              <span className='card-title'></span>
              <a
                href={data.link}
                className='btn-floating halfway-fab waves-effect waves-light red'
              >
                <i className='material-icons'>add</i>
              </a>
            </div>
            <div className='card-content'>
              <p>{data.info}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default index
