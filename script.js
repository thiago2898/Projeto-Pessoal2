const removedContacts = []
const contactsList = [
    [], []
]
const contact = {}
const userName = prompt('Digite seu nome.')
let menu = ''
let menu2 = ''

function addContact() {
    contactsList[0].push(contact.contactName)
    contactsList[1].push(contact.contactEmail)


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

function removeContact(removedContact) {
    removedContacts.push(removedContact)
}

function removeMenu() {
        do {
            menu2 = prompt(`Escolha alguma das opções abaixo:
        1- Remover algum contato
        2- Voltar`)


            switch (menu2) {
                case '1':
                    if (contactsList[0].length === 0) {
                        alert('Sem contatos cadastrados no momento.')
                    } else {
                        let list = 'Lista de contatos adicionados: \n'
                        for (let i = 0; i < contactsList[0].length; i++) {
                            list += `\nContato${i + 1}: ${contactsList[0][i]}\n`
                        }
                        list += '\nQual contato deseja remover?'

                        const listMenu = prompt(list)

                        for (let j = 0; j < contactsList[0].length; j++) {
                            if (listMenu === contactsList[0][j]) {
                                let removed = contactsList[0].splice(j, 1)
                                removeContact(removed)
                                alert(removed + ' foi removido da lista.')
                            }
                        }
                    }
                    break
                case '2':
                    alert('Voltando...')
                    break
                default:
                    alert('Opção inválida!')
            }
        } while (menu2 !== '2')
    }

function showCredits(dev) {
    return alert(`O projeto foi desenvolvido por:
    ${dev}: Desenvolvedor do sistema`)
}

do {
    
    menu = prompt(`
    Bem-vindo(a) à sua agenda de contatos ${userName}!
    O que deseja fazer diante das opções abaixo?

    Quantidade de contatos cadastrados: ${contactsList[0].length}

    1- Adicionar um contato
    2- Checar lista de contatos removidos
    3- Mais...
    4- Ver créditos
    5- Sair`)

    switch (menu) {
        case '1':
            login()
            break
        case '2':
            if (removedContacts.length === 0) {
                alert('Você não removeu nenhum contato até o momento.')
            } else {
                let removedList = ''
                for (let i = 0; i < removedContacts.length; i++) {
                    removedList += `${i + 1}º ${removedContacts[i]}\n`
                }
                alert(removedList)
            }
            break
        case '3':
            removeMenu()
            break
        case '4':
            showCredits('Thiago Botelho')
            break
        case '5':
            alert('Encerrando programa, obrigado por usá-lo ;)')
            break
        default:
            alert('Opção inválida!')
    }
} while (menu !== '5')