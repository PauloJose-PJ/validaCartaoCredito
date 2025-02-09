# Validação de Cartões de Créditos Ficticios
Obs... Usei o site que o professor me mandou para ver a validação dos cartões imagináveis:
https://www.4devs.com.br/gerador_de_numero_cartao_credito

## Projeto Passos
### 1. Nesse projeto ou melhor exercício eu tive que procurar o prefixo dos demais cartões onde o professor só tinha os cartões:
 - Visa
 - MasterCard
 - American Express
 - Discover
 - JSCB
![image](https://github.com/user-attachments/assets/71846cf5-6d9a-4d5f-b7d4-97fe9114f727)

### 2. Então eu fiz o seguinte pesquisei a regra de codigo para verificação dos demais que no total são dez (foi no ChatGPT):
![image](https://github.com/user-attachments/assets/d3153b4a-8b4a-460f-81d7-3e33a4e4c939)

### 3. Coversão de regras para prefixos
Mas só obtive estava obtendo a regra e não achava os prefixos então tentei o chat e não conseguir com duas imagens, porém tive uma ideia peguei duas imagens o prefixo antigo do professor e a regra de numeros do cartão coloquei os dois e pedi:
"Em relação a regra da imagem do google e o prefixo do professor, converta a regra para o prefixo para todos os cartões"
![Group 58](https://github.com/user-attachments/assets/c74f8bed-f701-4fce-a332-62ac49612bf9)

### 4. Usando ChatGPT invéz de Copilot ¬¬ mals
Então eu tinha nas mãos tudo mas como não sei back end voltamos a não entender, a lição do professor não tinha o "cardNumbers" que como abaixo era volumoso e as respostas estavam vindo tudo de uma vez e ambos estavam dando como true em varios cartões logicamente tinha algo errado então tive a ideia de pedir para o chatGPT (é realmente não não entendi com o copilot) como: 
"Eu estou estudando um jeito de validar cartões com "luhn" com JS porém queria o resultado quando inserir o numero na const cardNumber e o resultado for o cartão mencionado e somente o que passar na validação, dando a resposta do Card number e card type. A const cardNumbers não pode estar no script abaixo ...."

# Certo
![Certa](https://github.com/user-attachments/assets/414ea99c-b5a8-4211-908a-ac7d570b14c9)

# Errado
![Errada](https://github.com/user-attachments/assets/2c38c55c-f1d0-45a4-b811-9e8f0d6681f9)
