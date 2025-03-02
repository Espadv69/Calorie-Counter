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

  return <div className="notification">{message}</div>
}

export default Notification
