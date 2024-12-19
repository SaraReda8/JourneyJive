import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import styles from './faq.module.css';

export default function Faq() {
  
  const faqs = [
    {
      question: 'What types of travel packages does Journey Jive offer?',
      answer: 'Journey Jive offers a wide range of travel packages, including all-inclusive vacations, city breaks, adventure trips, family holidays, romantic getaways, and more. Whether you are looking for a relaxing beach holiday or an action-packed adventure, we have something for every traveler.'
    },
    {
      question: 'How do I book a holiday on Journey Jive?',
      answer: 'Booking a holiday is easy! Simply browse through our available trips, select the one you like, and click the "Book Now" button. You can then follow the prompts to complete your booking and payment online.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept a variety of payment methods, including credit and debit cards, PayPal, and bank transfers. All transactions are processed through a secure payment gateway to ensure your information is safe.'
    },
    {
      question: 'Can I make changes to my booking after it has been confirmed?',
      answer: 'Yes, you can make changes to your booking, such as modifying dates or adding extras, depending on the terms and conditions of your package. Please contact our customer service team as soon as possible, and we\'ll do our best to accommodate your request.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we offer travel insurance as an add-on option when you book your holiday. It is highly recommended to have travel insurance to cover unexpected events such as medical emergencies, trip cancellations, or lost baggage.'
    },
    {
      question: 'Are the prices displayed per person or per group?',
      answer: 'All prices displayed on our website are per person unless otherwise stated. You can view the total price for your group during the booking process, including any applicable discounts or promotions.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies depending on the type of package you have booked. You will find the specific cancellation terms for your holiday in your booking confirmation email. Please contact us if you need to cancel or make changes to your reservation.'
    },
    {
      question: 'How do I know if I need a visa for my holiday destination?',
      answer: 'Visa requirements depend on your nationality and the destination you are traveling to. We recommend checking with your country\'s embassy or consulate for the latest visa information. You can also contact our support team for general guidance on visa requirements.'
    },
    {
      question: 'Are airport transfers included in the holiday package?',
      answer: 'Some of our holiday packages include airport transfers, while others do not. Please check the package details before booking to see if airport transfers are included, or you can add this service separately during the booking process.'
    },
    {
      question: 'What should I do if I encounter an issue during my trip?',
      answer: 'If you encounter any issues during your trip, please contact our 24/7 customer support team, and we\'ll be happy to assist you. We are committed to ensuring you have a smooth and enjoyable travel experience, and our team is always ready to help with any concerns.'
    }
  ];

 

  return (
    <Container className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index} className={styles.faqItem}>
            <Accordion.Header>
              <div className={styles.questionNumber}>{index + 1}-</div>
              {faq.question}
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}