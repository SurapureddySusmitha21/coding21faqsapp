// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer-paragraph">{faqDetails.answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleStatus = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    const question = faqDetails.questionText
    return (
      <li className="li-container">
        <div className="faq-qustion-container">
          <h1 className="qustion-paragraph">{question}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onToggleStatus}
          >
            <img src={image} alt={altText} className="image-url" />
          </button>
        </div>
        {this.renderAnswer()}{' '}
      </li>
    )
  }
}

export default FaqItem
