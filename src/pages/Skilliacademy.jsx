import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/shared/Footer';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import Icons from '../components/shared/Icons';
import PartnerLogo from '../components/shared/PartnerLogo';
import franceTravailLogo from '../assets/francetravail.jpg';
import '../styles/Skilliacademy.css';

const Skilliacademy = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const partners = [
    {
      name: "France Travail",
      domain: "francetravail.fr",
      color: "#0052CC",
      description: "Finance la POEI à 100% pour les demandeurs d'emploi inscrits",
      src: franceTravailLogo,
      alt: "Logo France Travail"
    },
    {
      name: "AKTO",
      domain: "akto.fr",
      color: "#00A9E0",
      description: "OPCO référent pour les secteurs du commerce et des services",
      src: "https://cdn.brandfetch.io/idqKJYdEw4/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1755694168208",
      alt: "Logo AKTO"
    },
    {
      name: "OPCO Mobilités",
      domain: "opcomobilites.fr",
      color: "#E63312",
      description: "Opérateur de compétences pour le transport et la logistique",
      src: "https://logo.clearbit.com/opcomobilites.fr",
      alt: "Logo OPCO Mobilités"
    },
    {
      name: "OPCO 2i",
      domain: "opco2i.fr",
      color: "#2E3192",
      description: "OPCO de l'industrie et de l'interindustriel",
      src: "https://logo.clearbit.com/opco2i.fr",
      alt: "Logo OPCO 2i"
    },
    {
      name: "Constructys",
      domain: "constructys.fr",
      color: "#ED7D31",
      description: "Opérateur de compétences de la construction et du BTP",
      src: "https://logo.clearbit.com/constructys.fr",
      alt: "Logo Constructys"
    },
    {
      name: "Atlas",
      domain: "opco-atlas.fr",
      color: "#00B8D4",
      description: "OPCO des services financiers et du conseil",
      src: "https://logo.clearbit.com/opco-atlas.fr",
      alt: "Logo Atlas"
    },
    {
      name: "Afdas",
      domain: "afdas.com",
      color: "#D50032",
      description: "Opérateur pour la culture, les médias et les loisirs",
      src: "https://logo.clearbit.com/afdas.com",
      alt: "Logo Afdas"
    },
    {
      name: "Région Île-de-France",
      domain: "iledefrance.fr",
      color: "#E4003A",
      description: "Cofinancement des formations et aides aux entreprises",
      src: "https://logo.clearbit.com/iledefrance.fr",
      alt: "Logo Région Île-de-France"
    }
  ];

  const challenges = [
    {
      icon: "Search",
      title: "Manque de candidats qualifiés",
      description: "Difficulté à trouver des profils qualifiés sur vos métiers techniques ou en forte tension"
    },
    {
      icon: "TrendingUp",
      title: "Recrutements longs et coûteux",
      description: "Processus de recrutement longs, coûteux et incertains qui impactent votre activité"
    },
    {
      icon: "Users",
      title: "Turn-over élevé",
      description: "Taux de rotation important et faible engagement des collaborateurs recrutés"
    },
    {
      icon: "BarChart",
      title: "Perte de productivité",
      description: "Baisse de productivité liée au manque de personnel formé et opérationnel"
    }
  ];

  const whyChoose = [
    {
      icon: "User",
      title: "Candidats présélectionnés",
      description: "Des candidats présélectionnés et motivés par votre métier, choisis selon vos critères spécifiques."
    },
    {
      icon: "Target",
      title: "Formation ciblée",
      description: "Une formation ciblée et opérationnelle de 300 heures (2 à 6 mois) adaptée à vos méthodes de travail."
    },
    {
      icon: "Package",
      title: "100% financé",
      description: "100% de la formation financée par France Travail et les OPCO, sans aucun coût pour votre entreprise."
    },
    {
      icon: "Check",
      title: "Embauche sécurisée",
      description: "Promesse d'embauche uniquement si le profil vous convient, sur CDI ou CDD de plus de 6 mois."
    }
  ];

  const advantages = [
    {
      title: "0 € de charge salariale",
      benefit: "Jusqu'à 4 000 € d'économies par recrutement pendant la période de formation"
    },
    {
      title: "Productivité immédiate",
      benefit: "Des profils formés à vos méthodes et exigences, opérationnels dès leur arrivée"
    },
    {
      title: "Prime employeur",
      benefit: "Entre 1 500 € et 5 000 € versés directement à votre entreprise"
    },
    {
      title: "Garantie de remplacement",
      benefit: "Si le candidat abandonne ou n'est pas retenu, nous vous présentons jusqu'à 5 nouveaux profils sans frais supplémentaires"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Diagnostic du besoin",
      description: "Nous définissons avec vous le poste, les compétences à acquérir et le profil idéal à former"
    },
    {
      step: "2",
      title: "Rédaction & diffusion",
      description: "Rédaction de votre fiche de poste et diffusion multicanal sur jobboards et réseaux professionnels"
    },
    {
      step: "3",
      title: "Sourcing & présélection",
      description: "Identification, contact et validation des meilleurs candidats disponibles issus de notre CVthèque avec validation RH complète"
    },
    {
      step: "4",
      title: "Montage du dossier POEI",
      description: "Constitution et dépôt du dossier complet auprès de France Travail"
    },
    {
      step: "5",
      title: "Rencontre & sélection finale",
      description: "Présentation d'une shortlist de candidats qualifiés, vous sélectionnez ceux validés en entretien, puis déclenchement de la POEI"
    },
    {
      step: "6",
      title: "Formation terrain (300h)",
      description: "Formation en interne avec un tuteur (jusqu'à 3 candidats) ou via un organisme partenaire agréé"
    },
    {
      step: "7",
      title: "Garantie de remplacement",
      description: "Embauche du candidat formé ou remplacement sans frais en cas d'abandon"
    },
    {
      step: "8",
      title: "Intégration et suivi",
      description: "Accompagnement du candidat et de votre entreprise jusqu'à la fin de la formation et l'embauche définitive"
    }
  ];

  const services = [
    {
      icon: "FileText",
      title: "Audit approfondi du besoin"
    },
    {
      icon: "Search",
      title: "Sourcing et présélection complète"
    },
    {
      icon: "Briefcase",
      title: "Coordination France Travail & OPCO"
    },
    {
      icon: "File",
      title: "Montage intégral du dossier POEI"
    },
    {
      icon: "TrendingUp",
      title: "Suivi formation & accompagnement"
    },
    {
      icon: "Check",
      title: "Garantie de remplacement"
    }
  ];

  const faqs = [
    {
      question: "Qui finance la POEI ?",
      answer: "La POEI est financée à 100% par France Travail et votre OPCO. Aucun coût de formation n'est à votre charge."
    },
    {
      question: "Quels métiers sont concernés ?",
      answer: "Tous les métiers en tension : industrie, BTP, logistique, transport, hôtellerie-restauration, tertiaire, etc."
    },
    {
      question: "Le candidat est-il rémunéré pendant la POEI ?",
      answer: "Oui, le candidat perçoit une rémunération de France Travail pendant toute la durée de la formation."
    },
    {
      question: "Puis-je tester plusieurs candidats ?",
      answer: "Oui, vous pouvez former jusqu'à 3 candidats simultanément avec un seul tuteur interne."
    },
    {
      question: "Que se passe-t-il en cas d'abandon ?",
      answer: "Notre garantie de remplacement vous permet de recevoir jusqu'à 5 nouveaux profils sans frais supplémentaires."
    },
    {
      question: "Comment démarrer ?",
      answer: "Contactez-nous par téléphone ou via le formulaire. Un conseiller vous accompagne dans toutes les démarches."
    },
    {
      question: "Puis-je former les candidats moi-même ?",
      answer: "Oui, vous pouvez assurer la formation en interne avec un tuteur désigné, ou la déléguer à un organisme partenaire."
    }
  ];

  const IconComponent = ({ name, ...props }) => {
    const Icon = Icons[name];
    return Icon ? <Icon {...props} /> : null;
  };

  return (
    <>
      <Navbar />
      <main className="skilliacademy-page">
        {/* Hero Section */}
        <section className="section hero-academy">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badges">
              <span className="hero-badge">Attirez</span>
              <span className="hero-badge">Formez</span>
              <span className="hero-badge">Recrutez</span>
            </div>
            <h1>Skilliacademy forme vos futurs collaborateurs avant leur embauche</h1>
            <p className="hero-subtitle">100% financé par France Travail.</p>
            <div className="hero-buttons">
              <Button variant="purple" size="large" href="/poei">
                Je lance ma mission POEI
              </Button>
              <Button variant="yellow" size="large" href="/formation">
                Je me forme chez Skilliacademy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section partners-section">
        <div className="container">
          <h2 className="section-title">Nos partenaires officiels</h2>
          <p className="partners-intro">
            La POEI Skilliacademy est un dispositif cofinancé par France Travail, reconnu pour sa fiabilité et son efficacité.
          </p>

          <div className="partners-carousel">
            <div className="partners-track">
              {partners.concat(partners).map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-logo-container">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="partner-logo-img"
                    />
                  </div>
                  <h4 className="partner-name">{partner.name}</h4>
                  <p className="partner-description">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Service & Challenges Section - Violet Background */}
      <section className="section services-challenges-section">
        <div className="container">
          <h2 className="problems-title">Notre accompagnement clé en main</h2>
          <p className="problems-subtitle">Un service complet de A à Z</p>

          <div className="problems-grid">
            <motion.div
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>Gestion administrative complète - Nous nous occupons de toute la paperasse pour vous</p>
            </motion.div>
            <motion.div
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p>Validation des éligibilités - Vérification complète des critères et conditions</p>
            </motion.div>
            <motion.div
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>Coordination des formations - Pilotage et suivi de bout en bout</p>
            </motion.div>
            <motion.div
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p>Suivi jusqu'à l'embauche finale - Accompagnement continu jusqu'au recrutement</p>
            </motion.div>
          </div>

          <h2 className="problems-title" style={{ marginTop: '4rem' }}>Les défis du recrutement en métiers en tension</h2>
          <p className="problems-subtitle">Vos difficultés aujourd'hui</p>

          <div className="problems-grid">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="problem-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p><strong>{challenge.title}</strong> - {challenge.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="challenges-cta" style={{ color: '#EAF0F6', marginTop: '3rem', textAlign: 'center' }}>
            <p>Avec la POEI Skilliacademy, reprenez le contrôle de vos recrutements et transformez ces défis en opportunités.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section - White Background with Better Layout */}
      <section className="section why-section-new">
        <div className="container">
          <div className="why-header">
            <h2 className="section-title">La POEI Skilliacademy : un dispositif 100% financé</h2>
            <p className="section-sub">Une solution clé en main pour recruter, former et intégrer vos futurs collaborateurs sans risque financier</p>
          </div>

          <div className="why-content-wrapper">
            <div className="why-intro-box">
              <h3 className="why-intro-title">Pourquoi choisir la POEI Skilliacademy ?</h3>
              <p className="why-intro-text">Sur de nombreux métiers en tension, le bon candidat ne s'achète pas, il se forme.</p>
              <p className="why-intro-text">
                La Préparation Opérationnelle à l'Emploi Individuelle (POEI) vous permet de recruter plus vite et mieux,
                sans risque financier :
              </p>
              <div className="why-benefits-list">
                <div className="benefit-item">
                  <Icons.Check size={20} className="benefit-check" />
                  <span>Vous formez un candidat avant son embauche</span>
                </div>
                <div className="benefit-item">
                  <Icons.Check size={20} className="benefit-check" />
                  <span>La formation est financée à 100 % par France Travail et votre OPCO</span>
                </div>
                <div className="benefit-item">
                  <Icons.Check size={20} className="benefit-check" />
                  <span>Vous embauchez un collaborateur motivé, formé et prêt à travailler</span>
                </div>
                <div className="benefit-item">
                  <Icons.Check size={20} className="benefit-check" />
                  <span>Vous gagnez du temps, vous réduisez vos coûts, et vous sécurisez votre recrutement</span>
                </div>
              </div>
            </div>

            <div className="why-features-grid">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  className="why-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-icon-wrapper">
                    <IconComponent name={item.icon} size={32} />
                  </div>
                  <h4 className="feature-title">{item.title}</h4>
                  <p className="feature-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="section-cta">
            <Button variant="purple" size="large" href="/poei">
              Je lance ma mission POEI
            </Button>
            <Button variant="yellow" size="large" href="/formation">
              Je me forme chez Skilliacademy
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section - Violet Background */}
      <section className="section advantages-section-violet">
        <div className="container">
          <h2 className="problems-title">Les avantages concrets pour votre entreprise</h2>

          <div className="advantages-grid-new">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                className="advantage-card-glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="advantage-icon-circle">
                  <Icons.Check size={24} />
                </div>
                <h3 className="advantage-card-title">{adv.title}</h3>
                <p className="advantage-card-text">{adv.benefit}</p>
              </motion.div>
            ))}
          </div>

          <div className="section-cta" style={{ marginTop: '3rem' }}>
            <Button variant="purple" size="large" href="/poei">
              Je lance ma mission POEI
            </Button>
            <Button variant="yellow" size="large" href="/formation">
              Je me forme chez Skilliacademy
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Carousel */}
      <section className="section process-carousel-section">
        <div className="container">
          {/* Header */}
          <div className="process-carousel-header">
            <h2 className="section-title">Notre mission : nous gérons tout pour vous</h2>
            <p className="process-carousel-subtitle">Un processus simple, accompagné de A à Z par Skilliacademy</p>
            <p className="process-carousel-description">
              Skilliacademy agit comme partenaire opérationnel entre votre entreprise, France Travail, l'OPCO et les candidats.
              Nous pilotons le dispositif de A à Z pour que vous puissiez vous concentrer sur l'essentiel : votre production.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="process-carousel-container">
            {/* Navigation Buttons */}
            <button
              className="carousel-nav-btn carousel-prev"
              onClick={() => setCurrentStep(currentStep === 0 ? processSteps.length - 1 : currentStep - 1)}
              aria-label="Étape précédente"
            >
              <Icons.ChevronDown size={32} style={{ transform: 'rotate(90deg)' }} />
            </button>

            {/* Current Step Card */}
            <motion.div
              key={currentStep}
              className="process-carousel-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="carousel-card-number">{processSteps[currentStep].step}</div>
              <h3 className="carousel-card-title">{processSteps[currentStep].title}</h3>
              <p className="carousel-card-text">{processSteps[currentStep].description}</p>
            </motion.div>

            <button
              className="carousel-nav-btn carousel-next"
              onClick={() => setCurrentStep(currentStep === processSteps.length - 1 ? 0 : currentStep + 1)}
              aria-label="Étape suivante"
            >
              <Icons.ChevronDown size={32} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {processSteps.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentStep ? 'active' : ''}`}
                onClick={() => setCurrentStep(index)}
                aria-label={`Aller à l'étape ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats Simple */}
          <div className="process-stats-simple">
            <div className="stat-simple">
              <Icons.Clock size={24} />
              <div>
                <div className="stat-simple-label">Durée</div>
                <div className="stat-simple-value">2 à 6 mois</div>
              </div>
            </div>
            <div className="stat-simple">
              <Icons.FileText size={24} />
              <div>
                <div className="stat-simple-label">Contrats</div>
                <div className="stat-simple-value">CDI, CDD, Alternance</div>
              </div>
            </div>
            <div className="stat-simple stat-highlight">
              <Icons.DollarSign size={24} />
              <div>
                <div className="stat-simple-label">Coût</div>
                <div className="stat-simple-value">0 €</div>
              </div>
            </div>
            <div className="stat-simple stat-highlight">
              <Icons.Award size={24} />
              <div>
                <div className="stat-simple-label">Prime</div>
                <div className="stat-simple-value">jusqu'à 5 000 €</div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="process-final-simple">
            <Icons.Check size={28} />
            <p>Nous gérons 100 % du dispositif : vous n'avez rien à faire, sauf valider vos candidats.</p>
          </div>

          {/* CTAs */}
          <div className="section-cta">
            <Button variant="purple" size="large" href="/poei">
              Je lance ma mission POEI
            </Button>
            <Button variant="yellow" size="large" href="/formation">
              Je me forme chez Skilliacademy
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Violet Background */}
      <section className="section services-academy-violet">
        <div className="container">
          <h2 className="problems-title">Notre accompagnement clé en main</h2>
          <p className="problems-subtitle">
            Un service complet pour vous garantir une expérience sans souci, de la définition du besoin jusqu'à l'embauche
          </p>

          <div className="services-list-horizontal">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item-horizontal"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-number-badge">{String(index + 1).padStart(2, '0')}</div>
                <div className="service-icon-horizontal">
                  <IconComponent name={service.icon} size={24} />
                </div>
                <h4 className="service-title-horizontal">{service.title}</h4>
                <div className="service-arrow">
                  <Icons.ChevronDown size={20} style={{ transform: 'rotate(-90deg)' }} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="section-cta" style={{ marginTop: '3rem' }}>
            <Button variant="purple" size="large" href="/poei">
              Je lance ma mission POEI
            </Button>
            <Button variant="yellow" size="large" href="/formation">
              Je me forme chez Skilliacademy
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title text-gradient text-center">L'humain au cœur du recrutement et de la formation</h2>
          <div className="about-content">
            <p>
              Skilliacademy est la filiale formation du groupe Skillijob, spécialiste du recrutement dans les métiers en tension
              (industrie, BTP, transport, logistique, hôtellerie-restauration, tertiaire).
            </p>
            <p>
              Notre mission : réconcilier recrutement et formation pour que chaque embauche soit une réussite durable.
            </p>
            <p>
              Grâce à notre approche, nous identifions les talents et nous les préparons à intégrer vos équipes, avec le bon savoir-faire
              et le bon état d'esprit, dans un engagement d'efficacité, de fiabilité et de transparence.
            </p>
          </div>

          <div className="section-cta">
            <Button variant="purple" size="large" href="/poei">
              Je lance ma mission POEI
            </Button>
            <Button variant="yellow" size="large" href="/formation">
              Je me forme chez Skilliacademy
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ color: '#ffffff' }}>Et si votre prochain recrutement devenait une réussite durable ?</h2>
            <p style={{ color: '#ffffff' }}>
              Contactez dès aujourd'hui un conseiller Skilliacademy pour co-construire votre projet POEI sur mesure.
              Nous gérons le dispositif, vous validez les profils. Simple, rapide et 100 % financé.
            </p>
            <div className="cta-buttons">
              <Button variant="purple" size="large" href="/poei">
                Je lance ma mission POEI maintenant
              </Button>
              <Button variant="yellow" size="large" href="/formation">
                Je me forme chez Skilliacademy
              </Button>
            </div>
            <p className="cta-note">
              Les places POEI financées sont limitées par période : démarrez dès aujourd'hui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - New Layout */}
      <section className="section faq-section-new">
        <div className="container">
          <div className="faq-header-new">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="faq-subtitle-new">Retrouvez les réponses aux questions les plus courantes sur le dispositif POEI Skilliacademy</p>
          </div>

          <div className="faq-grid-new">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-card-new ${openFaq === index ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  className="faq-card-button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="faq-card-header">
                    <div className="faq-icon-circle">
                      <Icons.HelpCircle size={20} />
                    </div>
                    <h3 className="faq-card-question">{faq.question}</h3>
                    <div className={`faq-toggle-icon ${openFaq === index ? 'expanded' : ''}`}>
                      {openFaq === index ? <Icons.Minus size={20} /> : <Icons.Plus size={20} />}
                    </div>
                  </div>
                  {openFaq === index && (
                    <motion.div
                      className="faq-card-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Skilliacademy;
