/**
 * Dashboard Web de Vendas e Marketing - Google Apps Script Backend
 * Arquivo: Code.gs
 */

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Dashboard Web - Desempenho de Vendas e Marketing')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Auxiliar para incluir arquivos HTML modulares (Templates)
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
