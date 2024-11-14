const contactsDiary = []
const contactsList = [
    [], []
]
const contact = {}
const userName = prompt('Digite seu nome.')
let menu = ''


function addContact() {
    contactsList[0].push(contact.contactName)
    contactsList[1].push(contact.contactEmail)

    contactsDiary.push(contact.contactName)

    alert('Contato cadastrado com sucesso.')
}



function login(contactName, contactEmail) {
    contactName = prompt('Qual o nome do seu novo contato?')
    contactEmail = prompt(`Qual o email de ${contactName}`)

    contact.contactName = contactName
    contact.contactEmail = contactEmail

    const toConfirm = confirm('Deseja cadastrar o contato?')

    if (toConfirm === true) {
        addContact()
    }
}

function removeContact() {
    if (contactsDiary.length === 0) {
        alert('Sem contatos cadastrados ainda.')
    } else {
        let list = ''

        for (let i = 0; i < contactsDiary.length; i++) {
            list += `\n Contato${i + 1}: ${contactsList[0][i]}\n`
        }

        list += '\n Deseja remover algum contato?'

        if (confirm(list) === true) {
            const removingContact = prompt('Qual contato você deseja remover?')
            for (let j = 0; j < contactsList[0].length; j++) {
                if (removingContact === contactsList[0][j]) {
                    contactsDiary.splice(j, 1)
                    contactsList[0].splice(j, 1)
                    alert(removingContact + ' foi removido!')
                }
            }
        }
    }
}



do {
    
    menu = prompt(`
    Bem-vindo(a) à sua agenda de contatos ${userName}!
    O que deseja fazer diante das opções abaixo?

    Quantidade de contatos cadastrados: ${contactsDiary.length}

    1- Adicionar um contato
    2- Remover um contato
    3- Sair`)

    switch (menu) {
        case '1':
            login()
            break
        case '2':
            removeContact()
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while (menu !== '3')