import { motion } from 'framer-motion';
import { weddingData } from '../../data/content';

export default function OurStory() {
  return (
    <section className="section-container bg-bg-primary min-h-[70vh] flex items-center justify-center transition-colors duration-500">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center md:text-left"
        >
          <span className="text-accent-secondary uppercase tracking-[0.4em] text-[10px] mb-12 block opacity-70">
            {weddingData.story.title}
          </span>
          
          <h2 className="text-4xl md:text-6xl font-display text-accent-primary mb-16 leading-tight italic transition-colors duration-500">
            "Blessed by God, United in Love."
          </h2>
          
          <div className="relative">
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-border-subtle via-border-subtle/50 to-transparent hidden md:block" />
            <p className="text-lg md:text-2xl font-light leading-relaxed text-accent-secondary first-letter:text-accent-primary first-letter:font-display transition-colors duration-500">
              {weddingData.story.content}
            </p>
          </div>

          {weddingData.bibleVerse && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="mt-16 text-center md:text-right"
            >
              <p className="text-accent-primary font-display italic text-xl md:text-2xl mb-2 opacity-80 transition-colors duration-500">
                "{weddingData.bibleVerse.text}"
              </p>
              <p className="text-accent-secondary uppercase tracking-widest text-[10px] opacity-60">
                — {weddingData.bibleVerse.reference}
              </p>
            </motion.div>
          )}
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="h-px bg-border-subtle mt-20" 
          />
        </motion.div>
      </div>
    </section>
  );
}

