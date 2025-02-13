module.exports = {
  bail: true, // se um teste falhar, para de executar os testes
  coverageProvider: "v8",
  testMatch: [
    "<rootDir>/src/**/*.spec.js"
  ], // arquivos para testes possuem o padrão acima

}