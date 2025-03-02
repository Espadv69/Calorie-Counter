import { motion, AnimatePresence } from 'framer-motion'
import './ConfirmationModal.css'

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">
            Confirm
          </button>
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ConfirmationModal
