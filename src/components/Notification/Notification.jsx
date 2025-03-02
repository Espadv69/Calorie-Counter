import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Notification.css'

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [message, onClose])

  if (!message) return null

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="notification"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
