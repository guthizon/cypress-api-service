

class ServicePage {

  visitUrlWithUserToken() {
    let url = '';
    cy.request({
      method: 'POST',
      url: 'https://api-hom.sascar.com.br/auth/autenticarLDAP',
      headers: {
        'Credenciais' : 'Basic YmV0bzIwMDk6c2FzY2FyQDIwMjE=\'',
        'Content-type': 'application/json'
      },
      failOnStatusCode: false,
    })
    .then((res) => {
      let token = res.body.usuario.token;
      var base64Key = btoa(token + ":SAS_WEB_CAM_WBS:SAS_WEB_CAM_RNK:SAS_WEB_CAM_EVT:SAS_WEB_CAM_REQ:SAS_WEB_CAM_DAS").replaceAll("=","");
      url = `http://cameras-hom.sascar.com.br/auth/sasweb2/${base64Key}/pt-br`;
      console.log(url);
      cy.visit(url);
    })
  }
}

export default ServicePage