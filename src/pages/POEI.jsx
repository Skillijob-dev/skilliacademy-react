import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/shared/Footer';
import Button from '../components/shared/Button';
import Icons from '../components/shared/Icons';
import '../styles/POEI.css';

const POEI = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [showAllTestimonials, setShowAllTestimonials] = React.useState(false);

  const testimonials = [
    {
      text: "Grâce à la POEI, nous avons recruté deux opérateurs formés exactement à nos process, sans aucun coût pour l'entreprise.",
      author: "Sophie M.",
      role: "Responsable RH",
      company: "Secteur industriel",
      rating: 5,
      verified: true,
      date: "Il y a 2 mois"
    },
    {
      text: "La formation sur-mesure nous a permis d'harmoniser les pratiques managériales de nos équipes ; tout a été financé par notre OPCO.",
      author: "Marie L.",
      role: "Dirigeante",
      company: "PME BTP",
      rating: 5,
      verified: true,
      date: "Il y a 1 mois"
    },
    {
      text: "Le montage du dossier OPCO était complexe, mais Skilliacademy s'est occupé de tout. Résultat : 100 % de prise en charge et des équipes formées en 3 mois.",
      author: "Thomas R.",
      role: "Directeur Général",
      company: "PME 50 salariés",
      rating: 5,
      verified: true,
      date: "Il y a 3 semaines"
    },
    {
      text: "Nous cherchions un développeur avec des compétences précises. La POEI nous a permis de former le candidat idéal avant son embauche, sans risque.",
      author: "Alexandre D.",
      role: "CEO",
      company: "Start-up Tech",
      rating: 5,
      verified: true,
      date: "Il y a 1 mois"
    },
    {
      text: "Formation management de qualité, totalement adaptée à nos besoins et financée à 100 % par l'OPCO. Nos managers ont gagné en efficacité immédiatement.",
      author: "Catherine B.",
      role: "DRH",
      company: "Groupe industriel",
      rating: 5,
      verified: true,
      date: "Il y a 2 semaines"
    },
    {
      text: "Accompagnement professionnel du début à la fin. Aucune surprise, tout était clair et le financement a été validé rapidement.",
      author: "Isabelle P.",
      role: "Gérante",
      company: "Commerce de détail",
      rating: 5,
      verified: true,
      date: "Il y a 3 mois"
    }
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Diagnostic gratuit",
      description: "Analyse de vos besoins et choix du dispositif le plus avantageux"
    },
    {
      number: 2,
      title: "Montage du dossier OPCO",
      description: "Constitution complète du dossier, dépôt et suivi"
    },
    {
      number: 3,
      title: "Mise en œuvre de la formation",
      description: "Planification, animation et suivi"
    },
    {
      number: 4,
      title: "Résultats & reporting",
      description: "Indicateurs concrets sur la montée en compétence ou le recrutement réussi"
    }
  ];

  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
      setPage([newIndex, newDirection]);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const IconComponent = ({ name, ...props }) => {
    const Icon = Icons[name];
    return Icon ? <Icon {...props} /> : null;
  };

  return (
    <>
      <Navbar />
      <main className="skilliacademy-page">
        {/* Section 1 - Hero */}
        <section className="hero-skilliacademy">
        <div className="container">
          <div className="hero-layout">
            {/* Colonne gauche - Contenu principal */}
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badge">
                <Icons.Award size={18} />
                <span>Certifié Qualiopi</span>
              </div>

              <h1 className="hero-title">
                Formez, recrutez et développez vos équipes grâce aux dispositifs 100 % financés par les OPCO
              </h1>

              <p className="hero-subtitle">
                Skilliacademy accompagne les entreprises dans la montée en compétences et le recrutement sur-mesure de leurs équipes, sans avance de trésorerie.
              </p>

              <p className="hero-description">
                Que vous souhaitiez recruter un nouveau collaborateur ou faire évoluer vos équipes en interne, Skilliacademy vous aide à activer les dispositifs de financement OPCO les plus adaptés à votre situation.
              </p>

              <div className="hero-features">
                <div className="feature-pill">
                  <Icons.Check size={16} />
                  <span>100% financé</span>
                </div>
                <div className="feature-pill">
                  <Icons.Check size={16} />
                  <span>Sans avance de trésorerie</span>
                </div>
                <div className="feature-pill">
                  <Icons.Check size={16} />
                  <span>Accompagnement complet</span>
                </div>
              </div>
            </motion.div>

            {/* Colonne droite - Solutions CTA Cards */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="solutions-header">
                <h3>Deux solutions concrètes :</h3>
              </div>

              {/* Card POEI */}
              <motion.div
                className="solution-card poei-solution"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="solution-icon">
                  <Icons.Users size={24} />
                </div>
                <div className="solution-content">
                  <h4>La POEI</h4>
                  <p>Former avant de recruter, grâce à un dispositif 100 % financé</p>
                </div>
                <Button variant="purple" size="large" href="https://form.jotform.com/253092217441047">
                  Découvrir la POEI
                </Button>
              </motion.div>

              {/* Card Formation */}
              <motion.div
                className="solution-card formation-solution"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="solution-icon">
                  <Icons.TrendingUp size={24} />
                </div>
                <div className="solution-content">
                  <h4>La Formation sur-mesure</h4>
                  <p>Développer les compétences internes, sans coût pour l'entreprise</p>
                </div>
                <Button variant="yellow" size="large" href="/formation">
                  Formation sur-mesure OPCO
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - À propos */}
      <section className="section about-skilliacademy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Un organisme de formation stratégique au service des entreprises</h2>
            <div className="about-content">
              <p>
                Skilliacademy est le pôle formation de Skillijob, <strong>certifié Qualiopi</strong>, spécialisé dans la formation professionnelle sur-mesure et le déploiement des dispositifs de financement OPCO.
              </p>
              <p>
                Nous accompagnons les dirigeants, responsables RH et managers dans la mise en œuvre de parcours 100 % adaptés à leurs enjeux : montée en compétences, intégration, fidélisation et performance durable.
              </p>
              <div className="about-highlight">
                <Icons.Award size={24} />
                <p>Chaque projet est conçu pour maximiser votre retour sur investissement RH, avec une prise en charge financière quasi intégrale par les OPCO.</p>
              </div>
            </div>
            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon">
                  <Icons.DollarSign size={32} />
                </div>
                <h4>Financement jusqu'à 100 % par votre OPCO</h4>
              </div>
              <div className="pillar">
                <div className="pillar-icon">
                  <Icons.Target size={32} />
                </div>
                <h4>Accompagnement de A à Z (diagnostic, montage, suivi)</h4>
              </div>
              <div className="pillar">
                <div className="pillar-icon">
                  <Icons.TrendingUp size={32} />
                </div>
                <h4>Résultats mesurables sur vos recrutements et vos équipes</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Deux dispositifs */}
      <section className="section two-devices" id="devices">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-white">Deux dispositifs puissants pour votre croissance</h2>
            <p className="section-subtitle-white">
              Choisissez la solution adaptée à votre besoin : recruter ou faire évoluer vos équipes
            </p>
          </motion.div>

          <div className="devices-grid">
            {/* POEI */}
            <motion.div
              className="device-card poei-card"
              id="poei"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="device-icon-wrapper">
                <Icons.Users size={40} />
              </div>
              <div className="device-badge">POEI</div>
              <h3 className="device-title">Formez avant de recruter</h3>
              <p className="device-intro">
                La Préparation Opérationnelle à l'Emploi Individuelle (POEI) est un dispositif financé à 100 % par les OPCO, qui vous permet de former un candidat avant son embauche.
              </p>
              <div className="device-benefits">
                <h4>Bénéfices clés :</h4>
                <ul>
                  <li><Icons.Check size={18} /> Recrutement ciblé et adapté</li>
                  <li><Icons.Check size={18} /> Candidat opérationnel dès J1</li>
                  <li><Icons.Check size={18} /> 100 % financé par l'OPCO</li>
                  <li><Icons.Check size={18} /> Zéro risque pour l'entreprise</li>
                </ul>
              </div>
              <div className="device-cta">
                <Button variant="purple" size="large" href="https://form.jotform.com/253092217441047">
                  En savoir plus sur la POEI
                </Button>
              </div>
            </motion.div>

            {/* Formation sur-mesure */}
            <motion.div
              className="device-card formation-card"
              id="formation-opco"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="device-icon-wrapper">
                <Icons.TrendingUp size={40} />
              </div>
              <div className="device-badge formation">Formation OPCO</div>
              <h3 className="device-title">Développez vos équipes</h3>
              <p className="device-intro">
                Nos formations sur-mesure sont conçues pour accompagner la montée en puissance de vos équipes : management, communication, efficacité professionnelle, digitalisation, IA, etc.
              </p>
              <div className="device-benefits">
                <h4>Bénéfices clés :</h4>
                <ul>
                  <li><Icons.Check size={18} /> Programme 100 % sur-mesure</li>
                  <li><Icons.Check size={18} /> Zéro avance de trésorerie</li>
                  <li><Icons.Check size={18} /> Accompagnement complet</li>
                  <li><Icons.Check size={18} /> ROI mesurable et rapide</li>
                </ul>
              </div>
              <div className="device-cta">
                <Button variant="yellow" size="large" href="/formation">
                  Découvrir les formations
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Comment ça fonctionne */}
      <section className="section how-it-works">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Un processus simple, fluide et entièrement accompagné</h2>
            <p className="section-subtitle">
              Skilliacademy simplifie chaque étape du parcours, qu'il s'agisse d'une POEI ou d'une formation interne.
            </p>
            <div className="steps-flow">
              {howItWorksSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="step-flow-item">
                    <div className="step-flow-number">{step.number}</div>
                    <h4 className="step-flow-title">{step.title}</h4>
                    <p className="step-flow-desc">{step.description}</p>
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="step-flow-separator">
                      <Icons.ArrowRight size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="how-it-works-cta">
              <Button variant="purple" size="large" href="https://form.jotform.com/253092217441047">
                Planifier mon diagnostic gratuit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Témoignages */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="testimonials-title">Ils ont transformé leur gestion RH grâce à Skilliacademy</h2>
            <p className="testimonials-subtitle">Des entreprises de tous secteurs nous font confiance</p>

            {/* Carousel 1 par 1 */}
            <div className="single-testimonial-carousel">
              {/* Navigation Arrows */}
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => paginate(-1)}
                disabled={currentIndex === 0}
                aria-label="Avis précédent"
              >
                <Icons.ChevronLeft size={28} />
              </button>

              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => paginate(1)}
                disabled={currentIndex === testimonials.length - 1}
                aria-label="Avis suivant"
              >
                <Icons.ChevronRight size={28} />
              </button>

              {/* Testimonial Card with Animation */}
              <div className="testimonial-wrapper">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                      enter: (direction) => ({
                        x: direction > 0 ? 300 : -300,
                        opacity: 0
                      }),
                      center: {
                        zIndex: 1,
                        x: 0,
                        opacity: 1
                      },
                      exit: (direction) => ({
                        zIndex: 0,
                        x: direction < 0 ? 300 : -300,
                        opacity: 0
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="testimonial-card-single"
                  >
                    <div className="testimonial-header">
                      <div className="testimonial-rating">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Icons.Star key={i} size={16} />
                        ))}
                      </div>
                      {testimonials[currentIndex].verified && (
                        <span className="verified-badge">
                          <Icons.CheckCircle size={16} /> Vérifié
                        </span>
                      )}
                    </div>
                    <p className="testimonial-text-single">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-avatar-large">
                          {testimonials[currentIndex].author.charAt(0)}
                        </div>
                        <div className="author-info">
                          <strong>{testimonials[currentIndex].author}</strong>
                          <span className="author-role">{testimonials[currentIndex].role}</span>
                          <span className="author-company">{testimonials[currentIndex].company}</span>
                        </div>
                      </div>
                      <span className="testimonial-date">{testimonials[currentIndex].date}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Dots */}
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => {
                      const dir = index > currentIndex ? 1 : -1;
                      setCurrentIndex(index);
                      setPage([index, dir]);
                    }}
                    aria-label={`Aller à l'avis ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="carousel-counter">
                <span>{currentIndex + 1}</span> / {testimonials.length}
              </div>
            </div>

            {/* Vue mobile simple */}
            <div className="mobile-testimonials-list">
              {(showAllTestimonials ? testimonials : testimonials.slice(0, 1)).map((testimonial, index) => (
                <div key={index} className="mobile-testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icons.Star key={i} size={14} />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <span className="verified-badge">
                        <Icons.CheckCircle size={14} /> Vérifié
                      </span>
                    )}
                  </div>
                  <p className="testimonial-text-mobile">
                    "{testimonial.text}"
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="author-avatar-mobile">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="author-info">
                        <strong>{testimonial.author}</strong>
                        <span className="author-role">{testimonial.role}</span>
                        <span className="author-company">{testimonial.company}</span>
                      </div>
                    </div>
                    <span className="testimonial-date">{testimonial.date}</span>
                  </div>
                </div>
              ))}

              <button
                className="show-more-btn"
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              >
                {showAllTestimonials ? (
                  <>
                    <Icons.ChevronDown size={20} style={{ transform: 'rotate(180deg)' }} />
                    Voir moins
                  </>
                ) : (
                  <>
                    <Icons.ChevronDown size={20} />
                    Voir plus d'avis ({testimonials.length - 1})
                  </>
                )}
              </button>
            </div>

            <div className="certifications">
              <p>Certifié Qualiopi • Partenaire OPCO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - CTA Final */}
      <section className="section final-cta-skilliacademy">
        <div className="container">
          <motion.div
            className="final-cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Activez votre financement OPCO dès aujourd'hui</h2>
            <p>
              Skilliacademy vous aide à former, recruter et faire évoluer vos équipes sans contrainte financière.
              Nos experts OPCO vous accompagnent de A à Z dans le diagnostic, le montage de dossier et le déploiement de votre programme.
            </p>
            <div className="final-cta-blocks">
              <div className="cta-block">
                <h3>POEI</h3>
                <p>Former avant de recruter</p>
                <Button variant="purple" size="large" href="https://form.jotform.com/253092217441047">
                  Découvrir la POEI
                </Button>
              </div>
              <div className="cta-block">
                <h3>Formation OPCO</h3>
                <p>Développer vos équipes</p>
                <Button variant="yellow" size="large" href="/formation">
                  Formation sur-mesure OPCO
                </Button>
              </div>
            </div>
            <p className="final-cta-subtext">
              Un diagnostic gratuit pour identifier la meilleure opportunité de financement pour votre entreprise.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default POEI;
