import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/shared/Button';
import Icons from '../components/shared/Icons';
import '../styles/FormationOPCO.css';

const FormationOPCO = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    fonction: '',
    email: '',
    besoin: '',
    message: ''
  });

  const benefits = [
    {
      icon: 'Target',
      title: 'Un programme adapté à vos objectifs stratégiques',
      description: 'Formation conçue sur-mesure en fonction de vos objectifs, vos effectifs et votre secteur d\'activité.'
    },
    {
      icon: 'Users',
      title: 'Un accompagnement complet de A à Z',
      description: 'Diagnostic approfondi, création sur-mesure, montage du financement et déploiement opérationnel.'
    },
    {
      icon: 'DollarSign',
      title: 'Une prise en charge simplifiée via OPCO',
      description: 'Nous vous guidons et structurons le dossier complet pour maximiser la couverture financière.'
    },
    {
      icon: 'TrendingUp',
      title: 'Une montée en compétences rapide',
      description: 'Outils concrets, méthodes éprouvées et pratiques opérationnelles immédiatement applicables.'
    },
    {
      icon: 'BarChart',
      title: 'Un retour sur investissement clair',
      description: 'Équipes plus autonomes, productivité accrue, vision partagée et performance mesurable.'
    }
  ];

  const steps = [
    {
      number: 1,
      badge: '0 €',
      title: 'Diagnostic et cadrage',
      description: 'Nous échangeons avec vos dirigeants et responsables pour définir le besoin, les compétences à développer, le format et le budget OPCO mobilisable.'
    },
    {
      number: 2,
      title: 'Conception sur-mesure',
      description: 'Nous bâtissons avec vous un programme dédié (modules, durée, modalités présentiel/distanciel/hybride), en lien avec vos contraintes opérationnelles.'
    },
    {
      number: 3,
      title: 'Mobilisation OPCO & financement',
      description: 'Nous vous accompagnons dans le montage du dossier de prise en charge, l\'optimisation des contributions, et vous garantissons un taux de financement maximal.'
    },
    {
      number: 4,
      title: 'Déploiement & suivi',
      description: 'Intervention auprès de vos équipes, animation des modules, suivi de montée en compétences, évaluation post-formation et plan d\'action pour pérenniser les acquis.'
    }
  ];

  const themes = [
    {
      number: 1,
      title: 'Leadership & management de croissance',
      description: 'Formation des managers et dirigeants pour accompagner l\'évolution de vos équipes, structurer les processus, et instaurer une culture de performance et d\'autonomie.'
    },
    {
      number: 2,
      title: 'Digitalisation des processus RH & opérationnels',
      description: 'Accélérer votre transformation numérique interne : automatisation, optimisation des process, montée en compétences de vos collaborateurs.'
    },
    {
      number: 3,
      title: 'Intelligence artificielle & data pour les PME',
      description: 'Exploiter les opportunités de l\'IA et de la donnée pour optimiser vos opérations, innover, et gagner en agilité.'
    }
  ];

  const faqs = [
    {
      question: 'Est-ce que cette formation est bien éligible OPCO ?',
      answer: 'Oui, toutes nos formations sont éligibles au financement OPCO. Nous vous accompagnons dans le montage du dossier pour maximiser votre prise en charge.'
    },
    {
      question: 'Doit-on avancer les frais ?',
      answer: 'Dans la plupart des cas, aucune avance de trésorerie n\'est nécessaire. Nous gérons directement la facturation avec votre OPCO.'
    },
    {
      question: 'Quel format de formation ?',
      answer: 'Nous proposons des formats flexibles : présentiel, distanciel ou hybride, selon vos contraintes et préférences.'
    },
    {
      question: 'Combien de participants ?',
      answer: 'Nos formations s\'adaptent de 1 à 20 participants, avec un format optimisé pour garantir l\'efficacité pédagogique.'
    },
    {
      question: 'Quels résultats attendre ?',
      answer: 'Une montée en compétences mesurable, des équipes plus autonomes et performantes, et un ROI concret sur votre investissement formation.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const IconComponent = ({ name, ...props }) => {
    const Icon = Icons[name];
    return Icon ? <Icon {...props} /> : null;
  };

  return (
    <main className="formation-opco-page">
      {/* Hero Section */}
      <section className="hero-formation">
        <div className="container">
          <motion.div
            className="hero-content-formation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge-formation">
              <Icons.Award size={18} />
              <span>FINANCEMENT OPCO DISPONIBLE</span>
            </div>

            <h1 className="hero-title-formation">
              Formation sur-mesure<br />pour entreprises
            </h1>

            <p className="hero-subtitle-formation">
              Éligible OPCO • Quasi 100% prise en charge
            </p>

            <p className="hero-description-formation">
              Boostez les compétences de vos équipes, développez votre croissance et mobilisez votre budget formation sans avancer de trésorerie.
            </p>

            <div className="hero-cta-formation">
              <Button variant="primary" size="large" href="#contact">
                Demander un audit gratuit
              </Button>
              <Button variant="yellow" size="large" href="#contact">
                Obtenir un devis personnalisé
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats-formation">
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Financement OPCO</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">0€</div>
                <div className="stat-label">Avance de trésorerie</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Sur-mesure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Section */}
      <section className="section why-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Pourquoi ce dispositif est fait<br />pour votre entreprise</h2>

            <div className="why-grid">
              <motion.div
                className="why-card why-card-main"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="why-icon">
                  <Icons.TrendingUp size={40} />
                </div>
                <h3>Vous êtes une entreprise ambitieuse</h3>
                <p>
                  Vous souhaitez <strong>accélérer votre croissance</strong>, structurer vos équipes, <strong>renforcer vos compétences internes</strong> et faire monter en puissance vos managers ?
                </p>
                <div className="why-highlights">
                  <div className="why-highlight">
                    <Icons.CheckCircle size={20} />
                    <span>Accélération de croissance</span>
                  </div>
                  <div className="why-highlight">
                    <Icons.CheckCircle size={20} />
                    <span>Structuration des équipes</span>
                  </div>
                  <div className="why-highlight">
                    <Icons.CheckCircle size={20} />
                    <span>Montée en compétences</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="why-card why-card-solution"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="why-icon">
                  <Icons.Award size={40} />
                </div>
                <h3>Notre dispositif 100% sur-mesure</h3>
                <p>
                  Chez Skilliacademy, nous avons conçu un dispositif de formation <strong>parfaitement aligné avec vos enjeux métiers</strong>, et pratiquement <strong>100% financé via les OPCO</strong>.
                </p>
                <div className="why-benefits">
                  <div className="why-benefit">
                    <div className="why-benefit-icon">
                      <Icons.Zap size={24} />
                    </div>
                    <div>
                      <strong>100% sur-mesure</strong>
                      <span>Aligné à vos enjeux</span>
                    </div>
                  </div>
                  <div className="why-benefit">
                    <div className="why-benefit-icon">
                      <Icons.DollarSign size={24} />
                    </div>
                    <div>
                      <strong>Quasi 100% financé</strong>
                      <span>Sans ou très faible avance</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="why-cta-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="why-cta-content">
                <Icons.Sparkles size={32} />
                <div>
                  <h4>Mobilisez vos dispositifs formation sans contrainte financière</h4>
                  <p>Profitez d'un accompagnement complet, de la conception au déploiement</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <motion.div
            className="benefits-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Ce que vous obtenez concrètement</h2>
            <p className="section-intro">
              Un accompagnement sur-mesure pour développer les compétences de vos équipes et accélérer votre croissance
            </p>
          </motion.div>

          <div className="benefits-list">
            {benefits.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon];
              return (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="benefit-item-number">{index + 1}</div>
                  <div className="benefit-item-top">
                    <div className="benefit-item-icon">
                      {IconComponent && <IconComponent size={26} />}
                    </div>
                  </div>
                  <div className="benefit-item-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="benefits-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Prêt à transformer vos équipes et accélérer votre croissance ?</h3>
            <Button variant="primary" size="large" href="#contact">
              Demander un audit gratuit
            </Button>
            <p className="cta-subtitle">Réponse sous 24h • Sans engagement</p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section steps-section">
        <div className="container">
          <h2 className="section-title">Le déroulé de votre parcours formation</h2>
          <p className="section-subtitle">Le dispositif s'articule en 4 étapes claires</p>

          <div className="steps-timeline">
            <div className="steps-timeline-inner">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="step-number-wrapper">
                    {step.badge && <div className="step-badge">{step.badge}</div>}
                    <div className="step-number">{step.number}</div>
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="section-cta">
            <h3>Commencez dès aujourd'hui votre transformation</h3>
            <Button variant="primary" size="large" href="#contact">
              Planifier mon audit gratuit
            </Button>
            <p className="cta-subtitle">Premier échange offert • Sans engagement</p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="section themes-section">
        <div className="container">
          <h2 className="section-title">Nos axes d'intervention – adaptables à vos besoins</h2>
          <p className="section-subtitle">
            Chaque entreprise est unique. Voici quelques exemples de thèmes que nous avons développés et qui peuvent être adaptés à votre contexte :
          </p>

          <div className="themes-grid">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                className="theme-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="theme-icon-wrapper">
                  <div className="theme-badge">{theme.number}</div>
                  <div className="theme-icon">{theme.number}</div>
                </div>
                <div className="theme-content">
                  <h3>{theme.title}</h3>
                  <p>{theme.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="theme-item theme-item-special"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="theme-icon">+</div>
              <h3>Autres sujets possibles</h3>
              <ul>
                <li>Onboarding & fidélisation des talents</li>
                <li>Efficience opérationnelle</li>
                <li>Culture d'entreprise & QVT</li>
                <li>Et bien plus encore...</li>
              </ul>
            </motion.div>
          </div>

          <div className="section-cta">
            <h3>Besoin d'un programme sur-mesure pour votre entreprise ?</h3>
            <Button variant="primary" size="large" href="#contact">
              Demander un audit gratuit
            </Button>
            <p className="cta-subtitle">Échange personnalisé • Analyse de vos besoins • Sans engagement</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Foire aux questions</h2>
          <p className="section-subtitle">
            Retrouvez les réponses aux questions les plus fréquentes sur notre dispositif de formation OPCO
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <div className={`faq-icon ${openFaq === index ? 'open' : ''}`}>
                    {openFaq === index ? <Icons.Minus size={20} /> : <Icons.Plus size={20} />}
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Form Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-header">
                <h2>Lancez votre projet dès aujourd'hui</h2>
                <p className="contact-intro">
                  Préparez vos équipes pour les enjeux de demain : croissance, digitalisation, leadership… Nous vous aidons à structurer ce projet dans un format clé en main, avec un financement quasiment total via OPCO.
                </p>
              </div>

              <div className="contact-steps-wrapper">
                <h3>Pourquoi nous choisir ?</h3>
                <ul className="contact-steps">
                  <li>
                    <div className="contact-steps-icon">
                      <Icons.Zap size={24} />
                    </div>
                    <div className="contact-steps-content">
                      <strong>Réponse sous 24h</strong>
                      <span>Un conseiller vous recontacte rapidement</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-steps-icon">
                      <Icons.DollarSign size={24} />
                    </div>
                    <div className="contact-steps-content">
                      <strong>0€ d'avance</strong>
                      <span>Prise en charge OPCO quasi totale</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-steps-icon">
                      <Icons.CheckCircle size={24} />
                    </div>
                    <div className="contact-steps-content">
                      <strong>100% sur-mesure</strong>
                      <span>Programme adapté à vos besoins</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-steps-icon">
                      <Icons.Award size={24} />
                    </div>
                    <div className="contact-steps-content">
                      <strong>Sans engagement</strong>
                      <span>Audit et devis gratuits</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Demander un audit gratuit</h3>
              <p className="form-subtitle">Remplissez le formulaire et un conseiller vous recontacte sous 24h</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nom">Nom *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="entreprise">Entreprise *</label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fonction">Fonction *</label>
                  <input
                    type="text"
                    id="fonction"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleChange}
                    placeholder="Votre fonction"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="besoin">Besoin principal *</label>
                  <select
                    id="besoin"
                    name="besoin"
                    value={formData.besoin}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez votre besoin</option>
                    <option value="leadership">Leadership & Management</option>
                    <option value="digitalisation">Digitalisation</option>
                    <option value="ia">Intelligence Artificielle</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Commentaire / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre projet..."
                    rows="4"
                  />
                </div>

                <Button type="submit" variant="primary" size="large">
                  Envoyer ma demande
                </Button>

                <p className="form-disclaimer">
                  En soumettant ce formulaire, vous acceptez d'être contacté par Skilliacademy concernant votre projet de formation.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormationOPCO;
