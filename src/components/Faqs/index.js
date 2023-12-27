// Write your code here.

import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <>
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Faqs
