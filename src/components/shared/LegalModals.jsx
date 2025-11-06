import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalModals.css';

const LegalModals = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeModal) {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activeModal]);

  // Empêcher le scroll quand une modale est ouverte
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  // Expose openModal function globally for footer links
  useEffect(() => {
    window.openLegalModal = (modalId) => setActiveModal(modalId);
    return () => {
      delete window.openLegalModal;
    };
  }, []);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div
          className="legal-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="legal-modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="legal-head">
              <h3>
                {activeModal === 'mentions' && 'Mentions légales'}
                {activeModal === 'cookies' && 'Politique de cookies'}
                {activeModal === 'confidentialite' && 'Politique de confidentialité'}
                {activeModal === 'cgv' && 'Conditions générales de vente'}
              </h3>
              <button className="legal-close" onClick={closeModal}>
                Fermer ✕
              </button>
            </div>

            {/* Body */}
            <div className="legal-body">
              {activeModal === 'mentions' && <MentionsLegales />}
              {activeModal === 'cookies' && <PolitiqueCookies />}
              {activeModal === 'confidentialite' && <PolitiqueConfidentialite />}
              {activeModal === 'cgv' && <CGV />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Composant Mentions Légales
const MentionsLegales = () => (
  <>
    <h1>Mentions légales</h1>
    <p className="muted">Dernière mise à jour : 13 octobre 2025</p>

    <section className="card">
      <h2>Éditeur du site</h2>
      <p>
        Le présent site <strong>www.skilliacademy.fr</strong> (ci-après « le Site ») est édité par <strong>SKILLIACADEMY</strong>
        <br />
        <br />
        <strong>Forme juridique :</strong> SAS (Société par actions simplifiée)
        <br />
        <strong>Siège social :</strong> 60 rue François 1er, 75008 Paris, France
        <br />
        <strong>Téléphone :</strong> 09 70 19 67 02
        <br />
        <strong>E-mail :</strong> <a href="mailto:contact@skilliacademy.fr">contact@skilliacademy.fr</a>
      </p>
    </section>

    <section className="card">
      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du Site (textes, images, graphismes, logos, vidéos, icônes, code, charte graphique, etc.) est protégé par le droit de la propriété intellectuelle.
      </p>
    </section>

    <section className="card">
      <h2>Contact</h2>
      <p>
        <strong>SKILLIACADEMY</strong>
        <br />
        60 rue François 1er, 75008 Paris
        <br />
        📧 <a href="mailto:contact@skilliacademy.fr">contact@skilliacademy.fr</a>
        <br />
        📞 09 70 19 67 02
      </p>
    </section>
  </>
);

// Composant Politique Cookies
const PolitiqueCookies = () => (
  <>
    <h1>Politique de cookies</h1>
    <p className="muted">Dernière mise à jour : 13 octobre 2025</p>

    <section className="card">
      <p>
        La présente politique explique l'usage des cookies sur notre site.
      </p>
    </section>

    <section className="card">
      <h2>1. Définition</h2>
      <p>
        Un cookie est un petit fichier texte enregistré sur votre terminal lors de la consultation d'un site.
      </p>
    </section>

    <section className="card">
      <h2>2. Gérer vos préférences</h2>
      <p>
        Vous pouvez configurer votre navigateur pour bloquer/supprimer les cookies.
      </p>
    </section>
  </>
);

// Composant Politique de Confidentialité
const PolitiqueConfidentialite = () => (
  <>
    <h1>Politique de confidentialité</h1>
    <p className="muted">Dernière mise à jour : 13 octobre 2025</p>

    <section className="card">
      <p>
        La présente politique décrit comment <strong>SKILLIACADEMY</strong> traite vos données personnelles.
      </p>
    </section>

    <section className="card">
      <h2>1. Responsable du traitement</h2>
      <p>
        <strong>SKILLIACADEMY</strong>
        <br />
        60 rue François 1er, 75008 Paris, France
        <br />
        📧 Contact : <a href="mailto:contact@skilliacademy.fr">contact@skilliacademy.fr</a>
      </p>
    </section>

    <section className="card">
      <h2>2. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits d'accès, rectification, effacement, opposition.
      </p>
    </section>
  </>
);

// Composant CGV
const CGV = () => (
  <>
    <h1>Conditions générales de vente</h1>
    <p className="muted">Dernière mise à jour : 13 octobre 2025</p>

    <section className="card">
      <h2>1) Objet</h2>
      <p>
        Prestation de formation professionnelle et services de recrutement.
      </p>
    </section>

    <section className="card">
      <h2>2) Prix & paiement</h2>
      <p>
        Les prix sont indiqués en euros HT.
      </p>
    </section>
  </>
);

export default LegalModals;
