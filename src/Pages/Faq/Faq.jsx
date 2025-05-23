import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './faq.module.css';
import { motion } from 'framer-motion';

export default function Faq() {
  const faqs = [
    {
      question: 'What types of travel packages does Journey Jive offer?',
      answer: 'Journey Jive offers a wide range of travel packages, including all-inclusive vacations, city breaks, adventure trips, family holidays, romantic getaways, and more.'
    },
    {
      question: 'How do I book a holiday on Journey Jive?',
      answer: 'Booking a holiday is easy! Simply browse through our available trips, select the one you like, and click the "Book Now" button.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept a variety of payment methods, including credit and debit cards, PayPal, and bank transfers.'
    },
    {
      question: 'Can I make changes to my booking after it has been confirmed?',
      answer: 'Yes, you can make changes to your booking, depending on the terms and conditions of your package.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we offer travel insurance as an add-on option when you book your holiday.'
    },
    {
      question: 'Are the prices displayed per person or per group?',
      answer: 'All prices displayed on our website are per person unless otherwise stated.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies depending on the type of package you have booked.'
    },
    {
      question: 'How do I know if I need a visa for my holiday destination?',
      answer: 'Visa requirements depend on your nationality and the destination you are traveling to.'
    },
    {
      question: 'Are airport transfers included in the holiday package?',
      answer: 'Some of our holiday packages include airport transfers, while others do not.'
    },
    {
      question: 'What should I do if I encounter an issue during my trip?',
      answer: 'If you encounter any issues during your trip, please contact our 24/7 customer support team.'
    }
  ];

  return (
    <Container className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <Row>
        {faqs.map((faq, index) => (
          <Col key={index} md={6} className={styles.faqItem}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className={styles.question}>{index + 1}. {faq.question}</h4>
              <p className={styles.answer}>{faq.answer}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}