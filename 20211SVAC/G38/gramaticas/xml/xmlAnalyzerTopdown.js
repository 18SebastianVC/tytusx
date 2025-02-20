/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xmlAnalyzerTopdown = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,16],$V2=[1,17],$V3=[1,13],$V4=[1,18],$V5=[1,19],$V6=[1,20],$V7=[1,21],$V8=[10,12,14],$V9=[6,17],$Va=[1,28],$Vb=[2,16],$Vc=[14,16,17,20,21,22,23];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"LISTA_TAGS":3,"TAG":4,"S":5,"EOF":6,"LiSTA_TAGS":7,"LISTA_TAGS_P":8,"TAG_APERTURA":9,"mayor":10,"TAG_CIERRE":11,"slash":12,"CONTENIDO":13,"id":14,"igual":15,"str":16,"menor":17,"VALOR":18,"CONTENIDO_P":19,"signo_especial":20,"caracter_especial":21,"signo":22,"num":23,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",10:"mayor",12:"slash",14:"id",15:"igual",16:"str",17:"menor",20:"signo_especial",21:"caracter_especial",22:"signo",23:"num"},
productions_: [0,[3,2],[3,1],[5,2],[7,2],[8,2],[8,0],[4,3],[4,3],[4,4],[4,4],[9,4],[9,2],[11,4],[13,2],[19,2],[19,0],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="LISTA_TAGS_P",'+'color="lightblue3",'+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot  + $$[$0]["cad"] + $$[$0-1]["cad"];
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 2:


					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="LISTA_TAGS",'+'color="lightblue3",'+"];\n ";
					//childs
					//RESULTADO
                    var cad = cadenaRoot + $$[$0]["cad"];
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 3:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="S",'+'color="lightblue3",'+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + $$[$0-1]["cad"]  ;
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"] +";\n";


                    var cadena
                    cadena = "digraph G { \n ";
                    cadena += cad;
                    cadena += "}";
                    return cadena;
        
break;
case 4:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="LISTA_TAGS",'+'color="lightblue3",'+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + $$[$0-1]["cad"] + $$[$0]["cad"] ;
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;
                
break;
case 5:

					//parent CONTENIDO->CONTENIDO VALOR
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="LISTA_TAGS_P",'+'color="lightblue3",'+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + $$[$0-1]["cad"] + $$[$0]["cad"] ;
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;
                
break;
case 6:

					//parent CONTENIDO->CONTENIDO VALOR
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="LISTA_TAGS_P",'+'color="lightblue3",'+"];\n ";
                    //epsion
                    var nombreEpison = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaEpsion =nombreRoot+"["+'label="Ɛ",'+'color="green",'+"];\n ";
                    //
                    var cad = cadenaRoot + cadenaEpsion;
                    cad += nombreRoot+"->"+nombreEpison+"; \n ";
                    //Resultado
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;
                
break;
case 7:

					//parent TAG_APERTURA mayor TAG_CIERRE
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG",'+'color="lightblue3",'+"];\n ";
					//childs
                    var nombreMayor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMayor=nombreMayor+"["+'label=">",'+'color="greenyellow",'+"];\n ";

					//RESULTADO
					var cad = cadenaRoot + $$[$0-2]["cad"]+ cadenaMayor + $$[$0]["cad"]     ;
					cad+=nombreRoot+"->"+$$[$0-2]["nombre"]+";\n";
					cad+=nombreRoot+"->"+nombreMayor+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";

                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 8:

					//parent TAG_APERTURA slash mayor
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG",'+'color="lightblue3",'+"];\n ";
					//childs
                    var nombreMayor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMayor=nombreMayor+"["+'label="/>",'+'color="greenyellow",'+"];\n ";

					//RESULTADO
					var cad = cadenaRoot + $$[$0-2]["cad"]+ cadenaMayor    ;
					cad+=nombreRoot+"->"+$$[$0-2]["nombre"]+";\n";
					cad+=nombreRoot+"->"+nombreMayor+";\n";
                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
case 9:

					//parent TAG_APERTURA mayor LISTA_TAGS TAG_CIERRE
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG",'+'color="lightblue3",'+"];\n ";
					//childs
                    var nombreMayor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMayor=nombreMayor+"["+'label=">",'+'color="greenyellow",'+"];\n ";

					//RESULTADO
					var cad = cadenaRoot + $$[$0-3]["cad"]+ cadenaMayor + $$[$0-1]["cad"]+ $$[$0]["cad"]    ;
					cad+=nombreRoot+"->"+$$[$0-3]["nombre"]+";\n";
					cad+=nombreRoot+"->"+nombreMayor+";\n";
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";

                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
case 10:

					//parent TAG_APERTURA mayor CONTENIDO TAG_CIERRE
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG",'+'color="lightblue3",'+"];\n ";
					//childs
                    var nombreMayor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMayor=nombreMayor+"["+'label=">",'+'color="greenyellow",'+"];\n ";

					//RESULTADO
					var cad = cadenaRoot + $$[$0-3]["cad"]+ cadenaMayor + $$[$0-1]["cad"]+ $$[$0]["cad"]    ;
					cad+=nombreRoot+"->"+nombreMayor+";\n";
					cad+=nombreRoot+"->"+$$[$0-3]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";

                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 11:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG_APERTURA",'+'color="lightblue3",'+"];\n ";
					//childs
					var nombreId = XpathUtil.generarIdUnicoXmlNode();
					var cadenaId = nombreId + "["+'label="id(valLex='+$$[$0-2]+')",'+'color="greenyellow",'+"];\n ";

                    var nombreIgual = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaIgual=nombreIgual+"["+'label="=",'+'color="greenyellow",'+"];\n ";

					var nombreStr = XpathUtil.generarIdUnicoXmlNode();
					var cadenaStr = nombreStr + "["+'label="str(valLex='+$$[$0].substr(1,($$[$0]).length-2)+')",'+'color="greenyellow",'+"];\n ";

					//RESULTADO
					var cad = cadenaRoot + $$[$0-3]["cad"] + cadenaId + cadenaIgual + cadenaStr ;
					cad+=nombreRoot+"->"+$$[$0-3]["nombre"]+";\n";
					cad+=nombreRoot+"->"+nombreId+";\n";
					cad+=nombreRoot+"->"+nombreIgual+";\n";
					cad+=nombreRoot+"->"+nombreStr+";\n";

                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 12:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG_APERTURA",'+'color="lightblue3",'+"];\n ";
					//childs
                    var nombreMenor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMenor=nombreMenor+"["+'label="<",'+'color="greenyellow",'+"];\n ";
					var nombreId = XpathUtil.generarIdUnicoXmlNode();
					var cadenaId = nombreId + "["+'label="id(valLex='+$$[$0]+')",'+'color="greenyellow",'+"];\n ";
					//RESULTADO asdf
					var cad = cadenaRoot + cadenaMenor + cadenaId ;
					cad+=nombreRoot+"->"+nombreMenor+";\n";
					cad+=nombreRoot+"->"+nombreId+";\n";

                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 13:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="TAG_CIERRE",'+'color="lightblue3",'+"];\n ";
					//childs
                    var nombreMenor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMenor=nombreMenor+"["+'label="</",'+'color="greenyellow",'+"];\n ";

					var nombreId = XpathUtil.generarIdUnicoXmlNode();
					var cadenaId = nombreId + "["+'label="id(valLex='+$$[$0-1]+')",'+'color="greenyellow",'+"];\n ";

                    var nombreMayor = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaMayor=nombreMayor+"["+'label=">",'+'color="greenyellow",'+"];\n ";
					//RESULTADO
					var cad = cadenaRoot + cadenaMenor + cadenaId + cadenaMayor;
					cad+=nombreRoot+"->"+nombreMenor+";\n";
					cad+=nombreRoot+"->"+nombreId+";\n";
					cad+=nombreRoot+"->"+nombreMayor+";\n";

                    this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 14:

					//parent CONTENIDO->VALOR
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="CONTENIDO",'+'color="lightblue3",'+"];\n ";
					//childs
					//RESULTADO
                    var cad = cadenaRoot + $$[$0-1]["cad"]+ $$[$0]["cad"];
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 15:

					//parent CONTENIDO->CONTENIDO VALOR
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="CONTENIDO_P",'+'color="lightblue3",'+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + $$[$0-1]["cad"] + $$[$0]["cad"] ;
					cad+=nombreRoot+"->"+$$[$0-1]["nombre"]+";\n";
					cad+=nombreRoot+"->"+$$[$0]["nombre"]+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;
                
break;
case 16:

					//parent CONTENIDO->CONTENIDO VALOR
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="CONTENIDO_P",'+'color="lightblue3",'+"];\n ";
                    //epsion
                    var nombreEpison = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaEpsion =nombreRoot+"["+'label="Ɛ",'+'color="green",'+"];\n ";
                    //
                    var cad = cadenaRoot + cadenaEpsion;
                    cad += nombreRoot+"->"+nombreEpison+"; \n ";
                    //Resultado
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;
                 
break;
case 17:

					//parent  id
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="VALOR",'+'color="lightblue3",'+"];\n ";
					//childs
                    var labelTerminal = 'label="id(valLex='+$$[$0]+')",';
                    var colorTerminal = 'color="greenyellow",';
                    var nombreTerminal = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaTerminal=nombreTerminal+"["+labelTerminal+colorTerminal+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + cadenaTerminal;
					cad+=nombreRoot+"->"+nombreTerminal+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;

                
break;
case 18:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="VALOR",'+'color="lightblue3",'+"];\n ";
					//childs
                    var labelTerminal = 'label="str(valLex='+$$[$0].substr(1,($$[$0]).length-2)+')",';
                    var colorTerminal = 'color="greenyellow",';
                    var nombreTerminal = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaTerminal=nombreTerminal+"["+labelTerminal+colorTerminal+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + cadenaTerminal;
					cad+=nombreRoot+"->"+nombreTerminal+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
case 19:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="VALOR",'+'color="lightblue3",'+"];\n ";
					//childs
                    var labelTerminal = 'label="signo_especial(valLex='+$$[$0]+')",';
                    var colorTerminal = 'color="greenyellow",';
                    var nombreTerminal = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaTerminal=nombreTerminal+"["+labelTerminal+colorTerminal+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + cadenaTerminal;
					cad+=nombreRoot+"->"+nombreTerminal+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
case 20:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="VALOR",'+'color="lightblue3",'+"];\n ";
					//childs
                    var labelTerminal = 'label="caracter_especial(valLex='+$$[$0]+')",';
                    var colorTerminal = 'color="greenyellow",';
                    var nombreTerminal = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaTerminal=nombreTerminal+"["+labelTerminal+colorTerminal+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + cadenaTerminal;
					cad+=nombreRoot+"->"+nombreTerminal+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
case 21:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="VALOR",'+'color="lightblue3",'+"];\n ";
					//childs
                    var labelTerminal = 'label="signo(valLex='+$$[$0]+')",';
                    var colorTerminal = 'color="greenyellow",';
                    var nombreTerminal = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaTerminal=nombreTerminal+"["+labelTerminal+colorTerminal+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + cadenaTerminal;
					cad+=nombreRoot+"->"+nombreTerminal+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
case 22:

					//parent
                    var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaRoot=nombreRoot+"["+'label="VALOR",'+'color="lightblue3",'+"];\n ";
					//childs
                    var labelTerminal = 'label="num(valLex='+$$[$0]+')",';
                    var colorTerminal = 'color="greenyellow",';
                    var nombreTerminal = XpathUtil.generarIdUnicoXmlNode();
                    var cadenaTerminal=nombreTerminal+"["+labelTerminal+colorTerminal+"];\n ";
					//RESULTADO
                    var cad = cadenaRoot + cadenaTerminal;
					cad+=nombreRoot+"->"+nombreTerminal+";\n";
					this.$=[];
                    this.$["nombre"]=nombreRoot;
                    this.$["cad"]=cad;


                
break;
}
},
table: [{4:2,5:1,9:3,17:[1,4]},{1:[3]},{6:[1,5]},{10:[1,6],12:[1,7],14:[1,8]},{14:$V0},{1:[2,3]},{3:11,4:14,9:3,11:10,13:12,14:$V1,16:$V2,17:$V3,18:15,20:$V4,21:$V5,22:$V6,23:$V7},{10:[1,22]},{15:[1,23]},o($V8,[2,12]),o($V9,[2,7]),{4:25,9:3,11:24,17:$V3},{11:26,17:[1,27]},{12:$Va,14:$V0},{17:[2,2]},{14:$V1,16:$V2,17:$Vb,18:30,19:29,20:$V4,21:$V5,22:$V6,23:$V7},o($Vc,[2,17]),o($Vc,[2,18]),o($Vc,[2,19]),o($Vc,[2,20]),o($Vc,[2,21]),o($Vc,[2,22]),o($V9,[2,8]),{16:[1,31]},o($V9,[2,9]),{17:[2,1]},o($V9,[2,10]),{12:$Va},{14:[1,32]},{17:[2,14]},{14:$V1,16:$V2,17:$Vb,18:30,19:33,20:$V4,21:$V5,22:$V6,23:$V7},o($V8,[2,11]),{10:[1,34]},{17:[2,15]},o($V9,[2,13])],
defaultActions: {5:[2,3],14:[2,2],25:[2,1],29:[2,14],33:[2,15]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/*skip multi line coment*/
break;
case 2:return	'menor'
break;
case 3:return	'mayor'
break;
case 4:return 15
break;
case 5:return 12
break;
case 6:return 16
break;
case 7:return 16
break;
case 8:return 16
break;
case 9:return 16
break;
case 10:return 16
break;
case 11:return 23
break;
case 12:return 14
break;
case 13:return 20
break;
case 14:return 21
break;
case 15:return 22
break;
case 16:return 6
break;
}
},
rules: [/^(?:\s+)/i,/^(?:<!--[^'-']*-->)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:\/)/i,/^(?:“[^\"\n]*”)/i,/^(?:"[^\"\n]*")/i,/^(?:'[^''\n]*')/i,/^(?:‘[^''\n]*’)/i,/^(?:`[^''\n]*`)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:[a-zA-ZñÑáéíóúÁÉÍÓÚ]([a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]|_|-)*)/i,/^(?:\\=|\\<|\\>|\\\/|\\“|\\"|\\'|\\’|\\`|\\`|\\‘|.)/i,/^(?:&lt;|&gt;|&amp;|&apos;|&quot;|&eq;)/i,/^(?:[^a-zA-Z/<>=])/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = xmlAnalyzerTopdown;
exports.Parser = xmlAnalyzerTopdown.Parser;
exports.parse = function () { return xmlAnalyzerTopdown.parse.apply(xmlAnalyzerTopdown, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}