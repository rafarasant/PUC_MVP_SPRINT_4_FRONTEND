/**
 * Função para obter a lista existente do servidor via requisição GET.
 */
const getList = async () => {

    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }

    let url = 'http://127.0.0.1:5000/consultas';
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        
        data.consultas_pacientes.forEach(
          item => insertList(item.nome, item.sobrenome, item.cpf, item.data_nascimento, item.data_consulta, item.horario_consulta, item.plano_saude,
                              item.logradouro, item.numero, item.complemento, item.bairro, item.cidade, item.cep, item.id_paciente, item.id_consulta
          ))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
 /**
  * Função para colocar um item na lista do servidor via requisição POST.
  * @param {*} inputNome 
  * @param {*} inputSobrenome 
  * @param {*} inputCPF 
  * @param {*} inputDataNascimento 
  * @param {*} inputDataConsulta 
  * @param {*} inputHorarioConsulta 
  * @param {*} inputPlanoSaude 
  * @param {*} inputLogradouro 
  * @param {*} inputNumero 
  * @param {*} inputComplemento 
  * @param {*} inputBairro 
  * @param {*} inputCidade 
  * @param {*} inputCEP 
  */
  const postItem = async (inputNome, inputSobrenome, inputCPF, inputDataNascimento, inputDataConsulta, inputHorarioConsulta, 
                          inputPlanoSaude, inputLogradouro, inputNumero, inputComplemento, inputBairro, inputCidade, inputCEP
                        ) => {
    const formData = new FormData();
    formData.append('nome', inputNome);
    formData.append('sobrenome', inputSobrenome);
    formData.append('cpf', inputCPF);
    formData.append('data_nascimento', inputDataNascimento);
    formData.append('data_consulta', inputDataConsulta);
    formData.append('horario_consulta', inputHorarioConsulta);
    formData.append('plano_saude', inputPlanoSaude);
    formData.append('logradouro', inputLogradouro);
    formData.append('numero', inputNumero);
    formData.append('complemento', inputComplemento);
    formData.append('bairro', inputBairro);
    formData.append('cidade', inputCidade);
    formData.append('cep', inputCEP);
  
    let url = 'http://127.0.0.1:5000/agendar_consulta';
    fetch(url, {
      method: 'post',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  /**
  * Função para autualizar um item na lista do servidor via requisição PUT.
  * @param {*} inputNome 
  * @param {*} inputSobrenome 
  * @param {*} inputCPF 
  * @param {*} inputDataNascimento 
  * @param {*} inputDataConsulta 
  * @param {*} inputHorarioConsulta 
  * @param {*} inputPlanoSaude 
  * @param {*} inputLogradouro 
  * @param {*} inputNumero 
  * @param {*} inputComplemento 
  * @param {*} inputBairro 
  * @param {*} inputCidade 
  * @param {*} inputCEP 
  */
  const putItem = async (inputNome, inputSobrenome, inputCPF, inputDataNascimento, inputDataConsulta, inputHorarioConsulta, 
                          inputPlanoSaude, inputLogradouro, inputNumero, inputComplemento, inputBairro, inputCidade, inputCEP,
                          id_paciente, id_consulta
                        ) => {
    const formData = new FormData();
    formData.append('nome', inputNome);
    formData.append('sobrenome', inputSobrenome);
    formData.append('cpf', inputCPF);
    formData.append('data_nascimento', inputDataNascimento);
    formData.append('data_consulta', inputDataConsulta);
    formData.append('horario_consulta', inputHorarioConsulta);
    formData.append('plano_saude', inputPlanoSaude);
    formData.append('logradouro', inputLogradouro);
    formData.append('numero', inputNumero);
    formData.append('complemento', inputComplemento);
    formData.append('bairro', inputBairro);
    formData.append('cidade', inputCidade);
    formData.append('cep', inputCEP);
    formData.append('id_paciente', id_paciente);
    formData.append('id_consulta', id_consulta);
  
    let url = 'http://127.0.0.1:5000/editar';
    fetch(url, {
      method: 'put',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  /**
   *  Função para criar um botão close para cada item da lista.
   * @param {*} parent 
   */
  const insertButton = (parent) => {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    parent.appendChild(span);
  }

  /**
   *  Função para criar um botão edit para cada item da lista.
   * @param {*} parent 
   */
  const insertEditionButton = (parent) => {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u0045");
    span.className = "edit";
    span.appendChild(txt);
    parent.appendChild(span);
  }

  /**
   * Função de máscara para CPF.
   */
  const maskCPF = document.getElementById("newCPF");

    maskCPF.addEventListener('keypress', () => {
        let inputlenght = maskCPF.value.length

        if(inputlenght === 3 || inputlenght === 7) {
          maskCPF.value += '.'
        }
        else if(inputlenght === 11){
          maskCPF.value += '-'
        }

    })

  /**
   * Função de máscara para CEP.
   */
  const maskCEP = document.getElementById("newCEP");

      maskCEP.addEventListener('keypress', () => {
          let inputlenght = maskCEP.value.length

          if(inputlenght === 5) {
            maskCEP.value += '-'
          }
      })
    
  /**
   * Função de máscara para Data de Nascimento.
   */
  const maskDataNascimento = document.getElementById("newDataNascimento");

  maskDataNascimento.addEventListener('keypress', () => {
        let inputlenght = maskDataNascimento.value.length

        if(inputlenght === 2 || inputlenght === 5) {
          maskDataNascimento.value += '/'
        }
    })
  
  /**
   * Função para validar CPF.
   * @param {*} strCPF 
   * @returns 
   */
  function TestaCPF(strCPF) {
        strCPF = strCPF.replace(/\D/g,"")
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;

        return true;
    }

      // var strCPF = "12345678909";
      // alert(TestaCPF(strCPF));
  
  /**
   * Função para remover um item da lista de acordo com o click no botão close.
   */
  const removeElement = () => {
    let close = document.getElementsByClassName("close");
    // var table = document.getElementById('myTable');
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement.parentElement;
        const horarioDeletado = div.getElementsByTagName('td')[5].innerHTML
        const dataDeletada = div.getElementsByTagName('td')[4].innerHTML
        if (confirm("Deseja mesmo desmarcar esta consulta?")) {
          div.remove()
          deletaConsulta(horarioDeletado, dataDeletada)
          alert("Consulta desmarcada com sucesso!")
        }
      }
    }
  }

  /**
   * Função para editar um item da lista de acordo com o click no botão edit.
   */
  const editElement = () => {
    let close = document.getElementsByClassName("edit");
    // var table = document.getElementById('myTable');
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement.parentElement;
        document.getElementById("newNome").value = div.getElementsByTagName('td')[0].innerHTML
        document.getElementById("newSobrenome").value = div.getElementsByTagName('td')[1].innerHTML
        document.getElementById("newCPF").value = div.getElementsByTagName('td')[2].innerHTML
        document.getElementById("newDataNascimento").value = div.getElementsByTagName('td')[3].innerHTML
        document.getElementById("newDataConsulta").value = div.getElementsByTagName('td')[4].innerHTML
        document.getElementById("newHorarioConsulta").value = div.getElementsByTagName('td')[5].innerHTML
        document.getElementById("newPlanoSaude").value = div.getElementsByTagName('td')[6].innerHTML
        document.getElementById("newLogradouro").value = div.getElementsByTagName('td')[7].innerHTML
        document.getElementById("newNumero").value = div.getElementsByTagName('td')[8].innerHTML
        document.getElementById("newComplemento").value = div.getElementsByTagName('td')[9].innerHTML
        document.getElementById("newBairro").value = div.getElementsByTagName('td')[10].innerHTML
        document.getElementById("newCidade").value = div.getElementsByTagName('td')[11].innerHTML
        document.getElementById("newCEP").value = div.getElementsByTagName('td')[12].innerHTML
        document.getElementById("id_paciente").value = div.getElementsByTagName('td')[15].innerHTML
        document.getElementById("id_consulta").value = div.getElementsByTagName('td')[16].innerHTML
        // if (confirm("Deseja mesmo desmarcar esta consulta?")) {
        //   div.remove()
        //   deletaConsulta(horarioDeletado, dataDeletada)
        //   alert("Consulta desmarcada com sucesso!")
        // }
      }
    }
  }
  
  /**
   * Função para deletar um paciente da lista do servidor via requisição DELETE.
   * @param {*} horarioDeletado 
   * @param {*} dataDeletada 
   */
  const deletaConsulta = (horarioDeletado, dataDeletada) => {
    console.log(horarioDeletado, dataDeletada)
    let url = 'http://127.0.0.1:5000/desmarcar_consulta?horario=' + horarioDeletado + '&data=' + dataDeletada;
    fetch(url, {
      method: 'delete'
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  /**
   * Função para adicionar um novo item.
   */
  const newItem = () => {
    let inputNome = document.getElementById("newNome").value;
    let inputSobrenome = document.getElementById("newSobrenome").value;
    let inputCPF = document.getElementById("newCPF").value;
    let inputDataNascimento = document.getElementById("newDataNascimento").value;
    let inputDataConsulta = document.getElementById("newDataConsulta").value;
    let inputHorarioConsulta = document.getElementById("newHorarioConsulta").value;
    let inputPlanoSaude = document.getElementById("newPlanoSaude").value;
    let inputLogradouro = document.getElementById("newLogradouro").value;
    let inputNumero = document.getElementById("newNumero").value;
    let inputComplemento = document.getElementById("newComplemento").value;
    let inputBairro = document.getElementById("newBairro").value;
    let inputCidade = document.getElementById("newCidade").value;
    let inputCEP = document.getElementById("newCEP").value;
  
    if (inputNome === '' || inputSobrenome === '' || inputCPF === ''|| inputDataNascimento === '' || inputDataConsulta === '' || inputHorarioConsulta === ''
      || inputLogradouro === '' || inputNumero === '' ||  inputComplemento === '' ||  inputBairro === '' || inputCidade === ''  || inputCEP === ''
    ) {
      alert("Todas as informações requisitadas devem ser preenchidas.");
    } else if (TestaCPF(inputCPF) == false){   
      alert("O CPF informado é inválido.");
    } else {

      // insertList(inputNome, inputSobrenome, inputCPF, inputDataNascimento, inputDataConsulta, inputHorarioConsulta, inputPlanoSaude,
      // inputLogradouro, inputNumero, inputComplemento, inputBairro, inputCidade, inputCEP
      // )
      postItem(inputNome, inputSobrenome, inputCPF, inputDataNascimento, inputDataConsulta, inputHorarioConsulta, inputPlanoSaude,
        inputLogradouro, inputNumero, inputComplemento, inputBairro, inputCidade, inputCEP
      );
      
      getList();
    }  
  }

  /**
   * Função para traduzir o valor de plano de saúde (que no banco consta com "true" ou "false") 
   * para português.
   * @param {*} PlanoSaude 
   * @returns 
   */
  function traduzir (PlanoSaude) {
    let db_PS = "Não";
    if(PlanoSaude == true){
      db_PS = "Sim";
    }
    return db_PS;
  }

  /**
   * Função para inserir items na lista apresentada.
   * @param {*} pacienteNome 
   * @param {*} pacienteSobrenome 
   * @param {*} pacienteCPF 
   * @param {*} pacienteDataNascimento 
   * @param {*} pacienteDataConsulta 
   * @param {*} pacienteHorarioConsulta 
   * @param {*} pacientePlanoSaude 
   * @param {*} pacienteLougradouro 
   * @param {*} pacienteNumero 
   * @param {*} pacienteComplemento 
   * @param {*} pacienteBairro 
   * @param {*} pacienteCidade 
   * @param {*} pacienteCEP 
   */
  const insertList = (pacienteNome, pacienteSobrenome, pacienteCPF, pacienteDataNascimento, pacienteDataConsulta, pacienteHorarioConsulta, pacientePlanoSaude,
    pacienteLougradouro, pacienteNumero, pacienteComplemento, pacienteBairro, pacienteCidade, pacienteCEP, id_paciente, id_consulta
  ) => {
    var psPortugues = traduzir(pacientePlanoSaude);
    // var pDN = formatarData(pacienteDataNascimento);
    // var pDC = formatarData(pacienteDataConsulta);
    var item = [pacienteNome, pacienteSobrenome, pacienteCPF, pacienteDataNascimento, pacienteDataConsulta, pacienteHorarioConsulta, psPortugues, 
      pacienteLougradouro, pacienteNumero, pacienteComplemento, pacienteBairro, pacienteCidade, pacienteCEP, id_paciente, id_consulta]
    var table = document.getElementById('myTable');
    var row = table.insertRow();

    

    for (var i = 0; i < item.length - 2; i++) {
      var cel = row.insertCell(i);
      cel.textContent = item[i];
    }

    insertButton(row.insertCell(-1))
    insertEditionButton(row.insertCell(-1))

    var hiddenCell = row.insertCell(-1);
    hiddenCell.textContent = item[item.length - 2];
    hiddenCell.style.display = "none";
    
    var hiddenCell = row.insertCell(-1);
    hiddenCell.textContent = item[item.length - 1];
    hiddenCell.style.display = "none";
  

    // Esvazia os campos de preenchimento
    document.getElementById("newNome").value = "";
    document.getElementById("newSobrenome").value = "";
    document.getElementById("newCPF").value = "";
    document.getElementById("newDataNascimento").value = "";
    document.getElementById("newDataConsulta").value = "";
    document.getElementById("newHorarioConsulta").value = "";
    document.getElementById("newPlanoSaude").value = "";
    document.getElementById("newLogradouro").value = "";
    document.getElementById("newNumero").value = "";
    document.getElementById("newComplemento").value = "";
    document.getElementById("newBairro").value = "";
    document.getElementById("newCidade").value = "";
    document.getElementById("newCEP").value = "";
  
    removeElement();
    editElement();
  }

  /**
   * Através do uso da API externa Viacep, obtém os dados
   * de endereço do paciente a partir no CEP fornecido.
   */
  const getCepInfo = async () => {

    let cep = document.getElementById("newCEP").value;

    let url = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let logradouro = data.logradouro;
        let bairro = data.bairro;
        let cidade = data.localidade;
        const Uf = data.uf;
        let cep = data.cep;

        if(data.erro) {
          alert('O CEP informado é inválido.');
        }
        else {

          if(Uf !== 'RJ') {
            console.log(data.uf);
            document.getElementById("newLogradouro").value = "";
            document.getElementById("newBairro").value = "";
            document.getElementById("newCidade").value = "";  
            alert(`A UF do CEP informado é ${Uf}. Não agendamos consultas para pacientes que residem fora do Estado do Rio de Janeiro.`);
          }
          else {
            document.getElementById("newLogradouro").value = logradouro;
            document.getElementById("newBairro").value = bairro;
            document.getElementById("newCidade").value = cidade;
          }
        }

        console.log(rua);
        data.forEach(item => insertCard(item))
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    
  }


/**
   * Função para editar um item selecionado na tabela.
   */
  const editItem = () => {
    let inputNome = document.getElementById("newNome").value;
    let inputSobrenome = document.getElementById("newSobrenome").value;
    let inputCPF = document.getElementById("newCPF").value;
    let inputDataNascimento = document.getElementById("newDataNascimento").value;
    let inputDataConsulta = document.getElementById("newDataConsulta").value;
    let inputHorarioConsulta = document.getElementById("newHorarioConsulta").value;
    let inputPlanoSaude = document.getElementById("newPlanoSaude").value;
    let inputLogradouro = document.getElementById("newLogradouro").value;
    let inputNumero = document.getElementById("newNumero").value;
    let inputComplemento = document.getElementById("newComplemento").value;
    let inputBairro = document.getElementById("newBairro").value;
    let inputCidade = document.getElementById("newCidade").value;
    let inputCEP = document.getElementById("newCEP").value;
    let id_paciente = document.getElementById("id_paciente").value;
    let id_consulta = document.getElementById("id_consulta").value;
  
    if (inputNome === '' || inputSobrenome === '' || inputCPF === ''|| inputDataNascimento === '' || inputDataConsulta === '' || inputHorarioConsulta === ''
      || inputLogradouro === '' || inputNumero === '' ||  inputComplemento === '' ||  inputBairro === '' || inputCidade === ''  || inputCEP === ''
    ) {
      alert("Para atualizar os dados, todas as informações requisitadas devem ser preenchidas.");
    } else if (TestaCPF(inputCPF) == false){   
      alert("O CPF informado é inválido.");
    } else {

      // insertList(inputNome, inputSobrenome, inputCPF, inputDataNascimento, inputDataConsulta, inputHorarioConsulta, inputPlanoSaude,
      // inputLogradouro, inputNumero, inputComplemento, inputBairro, inputCidade, inputCEP
      // )
    
      if (confirm("Deseja mesmo atualizar esses dados?")) {
        putItem(inputNome, inputSobrenome, inputCPF, inputDataNascimento, inputDataConsulta, inputHorarioConsulta, inputPlanoSaude,
          inputLogradouro, inputNumero, inputComplemento, inputBairro, inputCidade, inputCEP, id_paciente, id_consulta
        );
        alert("Os dados foram atualizados com sucesso.")
      }
      getList();
    }  
  }
