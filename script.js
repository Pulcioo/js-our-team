console.log("JS OK")

// Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.


// definisco *un array di oggetti* che rappresentano i membri del team
// informazioni necessarie: *Nome, Ruolo e Foto*
const membersTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

// seleziono tramite query selector la classe .team-container
const teamContainer = document.querySelector('.team-container');

createCompleteCard();

// stampare dinamicamente una card per ogni membro del team
function createCompleteCard() {
    for (i = 0; i < membersTeam.length; i++) {
        const member = membersTeam[i];

        // creo div contenitore dove inserire la card
        const cardTeam = document.createElement('div');
        // tramite append child inserisco div come figlio di .team-container
        teamContainer.appendChild(cardTeam);
        // aggiungo classe a div appena creato
        cardTeam.className = 'team-card'

        // creo div contenitore dove inserire la card
        const cardImage = document.createElement('div');
        //  tramite append child inserisco div come figlio di .cardTeam
        cardTeam.appendChild(cardImage);
        // aggiungo classe a div appena creato
        cardImage.className = 'card-image';
    }
}