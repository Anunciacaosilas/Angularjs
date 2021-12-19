angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function ($scope, uppercaseFilter){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [
      {nome: "Ana", telefone: "9999998",data: new Date(), operadora:{nome: "Oi", codigo: 14, categoria:"Celular"}},
      {nome: "Carol", telefone: "99999998",data: new Date(), operadora:{nome: "Vivo", codigo: 15, categoria:"Celular"}},
      {nome: "Silas", telefone: "9999998",data: new Date(), operadora:{nome: "Tim", codigo: 41, categoria:"Celular"}}
  ];
  $scope.operadoras = [
      {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
      {nome: "Claro", codigo: 15, categoria: "Celular", preco: 1},
      {nome: "Vivo", codigo: 41, categoria: "Celular", preco: 3},
      {nome: "GVT", codigo: 25, categoria: "Celular", preco: 1},
      {nome: "Net", codigo: 21, categoria: "Fixo", preco: 2}
   ];
  $scope.adicionarContato = function (contato) {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
  };
  $scope.apagarContatos = function (contatos) {
     $scope.contatos = contatos.filter(function(contato){
          if (!contato.selecionado) return contato;
      });
      
  };
  $scope.isContatoSelecionado = function (contatos){
     return contatos.some(function(contato){
          return contato.selecionado;
      });
  };
  $scope.ordernarPor = function (campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
});