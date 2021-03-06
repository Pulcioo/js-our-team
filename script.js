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
        const members = membersTeam[i];

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

        // creo div contenitore dove inserire il text
        const cardText = document.createElement('div');
        //  tramite append child inserisco div come figlio di .cardTeam
        cardTeam.appendChild(cardText);
        // aggiungo classe a div appena creato
        cardText.className = 'card-text';

        // creo img
        const img = document.createElement('img')
        //  tramite append child inserisco div come figlio di .cardImage
        cardImage.appendChild(img);
        // inserisco immagine nel tag img
        img.src = members.foto;

        // creo h3
        const h3 = document.createElement('h3');
        //  tramite append child inserisco div come figlio di .cardImage
        cardText.appendChild(h3);
        // inserisco testo nel tag h3
        h3.innerText = members.nome;

        // creo p
        const p = document.createElement('p');
        //  tramite append child inserisco div come figlio di .cardImage
        cardText.appendChild(p);
        // inserisco testo nel tag h3
        p.innerText = members.ruolo;
    }
}