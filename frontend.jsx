// components/SpinningGallery.jsx
import { motion } from 'framer-motion';
import './Gallery.css';

const images = ["/habit1.png", "/habit2.png", "/habit3.png", "/habit4.png"];

export default function SpinningGallery() {
    return (
        <div className="gallery-container">
            <motion.div
                className="spinning-wheel"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="gallery-item"
                        style={{ transform: `rotateY(${i * 90}deg) translateZ(250px)` }}
                    >
                        <img src={src} alt="Habit" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}