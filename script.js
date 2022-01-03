var ScriptFrame = React.createClass({ displayName: "ScriptFrame",

  getInitialState: function () {
    return {
      fulldata: { forthem: [{ articles: [] }] } };

  },

  componentDidMount: function () {
    var self = this;
    $.getJSON('https://emjayweb.github.io/portfolio/scripts/snippets.json', function (snowden) {
      self.setState({ fulldata: snowden });
    });
  },

  runview: function (doge) {
    $('#' + doge).children('.artshows').slideToggle();
    $('#' + doge).children('.pointmade').children('.madeo').toggleClass('brexit');
  },

  rundmc: function (aye) {
    return /*#__PURE__*/React.createElement("ul", { className: "artshows" }, /*#__PURE__*/
    React.createElement("div", { className: "triangle" }),
    aye.articles.map(function (make, o) {
      return /*#__PURE__*/React.createElement("li", { key: o }, "> ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: make.toolurl }, make.tool));
    }));

  },

  render: function () {
    var self = this;
    return /*#__PURE__*/React.createElement("div", { id: "madeforlist" }, /*#__PURE__*/
    React.createElement("ul", null,
    this.state.fulldata.forthem.map(function (m, i) {
      return /*#__PURE__*/React.createElement("li", { id: m.therefore, key: i }, /*#__PURE__*/
      React.createElement("span", { className: "pointmade", onClick: () => {self.runview(m.therefore);} }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-plus-circle madeo", "aria-hidden": "true" }), /*#__PURE__*/
      React.createElement("span", null, m.therefore), /*#__PURE__*/
      React.createElement("span", { className: "pull-right" }, m.theresym)),

      self.rundmc(m));
    })));


  } });


ReactDOM.render( /*#__PURE__*/React.createElement(ScriptFrame, null), document.getElementById('scriptframe'));

/*Function*/

var PasswordTest = React.createClass({ displayName: "PasswordTest",

  runthru: function () {
    var password = document.getElementById('password').value;
    var errtext = document.getElementById('errtext');
    if (password.length == 0)
    {errtext.innerHTML = "Please input a password";} else
    {
      var capital = password.replace(/[^A-Z]/g, "").length;
      var capitalplace = document.getElementById("capitalplace");
      var number = password.replace(/[^0-9]/g, "").length;
      var numberplace = document.getElementById("numberplace");
      var lower = password.replace(/[^a-z]/g, "").length;
      var lowerplace = document.getElementById("lowerplace");
      var special = password.replace(/[^!@#\$%\^\&*\)\(+=._-]/g, "").length;
      var specialplace = document.getElementById("specialplace");

      var capitalyes = 0;
      var numberyes = 0;
      var loweryes = 0;
      var specialyes = 0;

      if (capital != '') {capitalyes = 26;}
      if (number != '') {numberyes = 10;}
      if (lower != '') {loweryes = 26;}
      if (special != '') {specialyes = 32;}

      capitalplace.innerHTML = capital;
      numberplace.innerHTML = number;
      lowerplace.innerHTML = lower;
      specialplace.innerHTML = special;

      var totpos = document.getElementById("totpos");
      var countem = capitalyes + numberyes + loweryes + specialyes;

      totpos.innerHTML = countem;
      totpas.innerHTML = password.length;

      var posnum = parseFloat(countem);
      var pasnum = parseFloat(password.length);

      var possibilities = Math.pow(posnum, pasnum);
      var badstrokes = 2000000000;

      var posplace = document.getElementById('possibilities');
      posplace.innerHTML = possibilities;

      var rawd = possibilities / badstrokes;
      var cracktime = document.getElementById('cracktime');

      var indays = Math.floor(rawd / 86400);
      var inhours = Math.floor(rawd % 86400 / 3600);
      var inminutes = Math.floor(rawd % 86400 % 3600 / 60);
      var inseconds = Math.floor(rawd % 86400 % 3600) % 60;

      cracktime.innerHTML = indays + " days " + inhours + " hours " + inminutes + " minutes " + inseconds + " seconds";
    }
  },

  render: function () {
    if (this.props.copy) {
      return /*#__PURE__*/React.createElement("div", { id: "password-test" }, /*#__PURE__*/
      React.createElement("h2", null, "Password Test"), /*#__PURE__*/
      React.createElement("input", { type: "text", id: "password", className: "form-control marbottom" }), /*#__PURE__*/
      React.createElement("button", { className: "btn btn-success", onClick: this.runthru }, "Test Your Password"), /*#__PURE__*/
      React.createElement("p", { id: "errtext" }), /*#__PURE__*/
      React.createElement("table", { className: "table" }, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Character combination"), /*#__PURE__*/
      React.createElement("th", null, "Count")), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Uppercase chars"), /*#__PURE__*/
      React.createElement("th", { id: "capitalplace" })), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Lowercase chars"), /*#__PURE__*/
      React.createElement("th", { id: "lowerplace" })), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Numbers"), /*#__PURE__*/
      React.createElement("th", { id: "numberplace" })), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Special chars"), /*#__PURE__*/
      React.createElement("th", { id: "specialplace" }))), /*#__PURE__*/


      React.createElement("p", null, "Character Combinations: ", /*#__PURE__*/React.createElement("span", { id: "totpos" })), /*#__PURE__*/
      React.createElement("p", null, "Password Length: ", /*#__PURE__*/React.createElement("span", { id: "totpas" })), /*#__PURE__*/
      React.createElement("p", null, "Possible Combinations: ", /*#__PURE__*/React.createElement("span", { id: "possibilities" })), /*#__PURE__*/
      React.createElement("p", null, "Estimated Time to Crack: ", /*#__PURE__*/React.createElement("span", { id: "cracktime" })));

    } else
    return null;
  } });


var PasswordGen = React.createClass({ displayName: "PasswordGen",

  readthru: function () {
    var newpass = document.getElementById('newpass');
    var longth = 20,
    allc = "!@#$%^&*()_+~`|}{[]\:;?><,./-=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    passgen = '';
    for (var i = 0; i < longth; i++) {
      passgen += allc[Math.floor(Math.random() * allc.length)];
    }
    newpass.innerHTML = passgen;
    newpass.style.display = "block";
  },

  render: function () {
    if (this.props.copy) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "Password Generator"), /*#__PURE__*/
      React.createElement("button", { className: "btn btn-success marbottom", onClick: this.readthru }, "Generate a Random Password"), /*#__PURE__*/
      React.createElement("p", { id: "newpass", className: "marbottom" }));



    } else
    return null;
  } });


class TheBasics extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "Password Generator"));

  }}


var PasswordGeneratorFrame = React.createClass({ displayName: "PasswordGeneratorFrame",

  getInitialState: function () {
    return {
      passtest: true,
      passgen: false,
      passclass: 'selled',
      genclass: '' };
  },

  runpassgen: function () {
    this.setState({
      passtest: false,
      passgen: true,
      passclass: '',
      genclass: 'selled' });
  },

  runpasstest: function () {
    this.setState({
      passtest: true,
      passgen: false,
      passclass: 'selled',
      genclass: '' });
  },

  render: function () {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement(TheBasics, null), /*#__PURE__*/
    React.createElement("div", { id: "pass" }, /*#__PURE__*/
    React.createElement("h2", { id: "passclicker", onClick: this.runpasstest, className: this.state.passclass }, "Test your Password"), /*#__PURE__*/
    React.createElement("h2", { id: "genclicker", onClick: this.runpassgen, className: this.state.genclass }, "Generate Password")), /*#__PURE__*/

    React.createElement(PasswordTest, { copy: this.state.passtest }), /*#__PURE__*/
    React.createElement(PasswordGen, { copy: this.state.passgen }));

  } });


ReactDOM.render( /*#__PURE__*/React.createElement(PasswordGeneratorFrame, null), document.getElementById('passwordgenerator'));