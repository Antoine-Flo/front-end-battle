import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  showError(mess: string, code?: string) {
    const bar = (mess, time = 4000) =>
      this.snackBar.open(mess, 'Fermer', { duration: time });

    switch (code) {
      case 'auth/email-already-in-use':
        bar('E-mail déjà utilisé.');
        break;

      case 'auth/invalid-email':
        bar('E-mail invalide.');
        break;

      case 'auth/too-many-requests':
        bar(
          `Trop de tentatives, l'accés à ce compte a temporairement été suspendu.`
        );
        break;

      case 'auth/weak-password':
        bar(`Mot de passe trop faible, il doit comporter 1 minuscule, 1 majuscule et 1 chiffre.`);
        break;

      case 'auth/account-exists-with-different-credential':
        bar(
          `Un compte avec cet e-mail existe déjà mais avec un autre fournisseur (GitHub, Google, ...), merci d'essayer un autre moyen.`,
          10000
        );
        break;

      default:
        bar(mess);
        break;
    }
  }

  showSuccess(mess: string, time = 4000) {
    this.snackBar.open(mess, 'Fermer', { duration: time });
  }
}
