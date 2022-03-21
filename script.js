console.log("JS OK")

// Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.


// definisco *un array di oggetti* che rappresentano i membri del team
// informazioni necessarie: *Nome, Ruolo e Foto*
const membersTeam = [
    member1 = {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    member2 = {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    member3 = {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    member4 = {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    member5 = {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    member6 = {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

createCompleteCard()

// stampare dinamicamente una card per ogni membro del team
function createCompleteCard() {
    for (i = 0; i < membersTeam.length; i++) {
        // creo div contenitore dove inserire la card
        createTeamCard();
    }
    // creo div dove inserire img
    createCardImage();

    // creo div dove inserire il text

}

function createTeamCard() {
    // creo div contenitore dove inserire la card
    const cardTeam = document.createElement('div');
    // seleziono tramite query selector la classe .team-container
    const teamContainer = document.querySelector('.team-container');
    // tramite append child inserisco div come figlio di .team-container
    teamContainer.appendChild(cardTeam);
    // aggiungo classe a div appena creato
    cardTeam.className = 'team-card'
}

function createCardImage() {
    // creo div contenitore dove inserire la card
    const cardImage = document.createElement('div');
    // seleziono tramite query selector la classe .team-card
    const cardTeam = document.querySelector('.team-card');
    //  tramite append child inserisco div come figlio di .cardTeam
    cardTeam.appendChild(cardImage);
    // aggiungo classe a div appena creato
    cardImage.className = 'card-image';
}