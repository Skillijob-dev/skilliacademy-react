import { useState, useEffect } from 'react';

/**
 * Hook d'authentification
 * Gère l'état de connexion de l'utilisateur
 * Fournit les informations utilisateur (nom, email, type)
 * Gère la déconnexion
 */
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Charger les données utilisateur depuis le localStorage au montage
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setCurrentUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Fonction de connexion
  const login = async (userData) => {
    try {
      // Ici vous pouvez ajouter votre logique de connexion (API call, etc.)
      setCurrentUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return { success: false, error: error.message };
    }
  };

  // Fonction de déconnexion
  const logout = async () => {
    try {
      // Ici vous pouvez ajouter votre logique de déconnexion (API call, etc.)
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('currentUser');
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      return { success: false, error: error.message };
    }
  };

  // Fonction de mise à jour du profil utilisateur
  const updateProfile = async (updatedData) => {
    try {
      const updatedUser = { ...currentUser, ...updatedData };
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      return { success: false, error: error.message };
    }
  };

  return {
    currentUser,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateProfile,
  };
};
