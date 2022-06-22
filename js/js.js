function roteiros(){
    document.write("<b>Variavel Inicial era:</b><br>");
    var atividade = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b> ->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br> #Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br> #Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br> #Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b> ->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br> #Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br> #Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br> #Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br>  </body> </html>";
    document.write (atividade);
    var quebrei = atividade.split("->");
    var tamanho = quebrei.length -1;
    
    document.write("<br><b>Número de cidade</b>:" + tamanho);
    document.write("<br><b>O nome de cada cidade e a característica do Roteiro A:</b>");
    var proximo = 1;
    var n=1;
    var totLocaisA = 0;
    document.write("<ul>");
    while(n<=tamanho){
        var primeiro = atividade.indexOf('*',proximo);
        var segundo  = atividade.indexOf('*',primeiro+1);
        var cidade   = atividade.substring(primeiro+1,segundo,segundo-primeiro);
        proximo = segundo+1;
        document.write("<li>"+cidade+"</li>");
                var roteiroA = quebrei[n].split("#");
                document.write(roteiroA[1]);
                var conteudo = roteiroA[1].split("<br>");
                var listConteudo = conteudo[1].split(";");
                var qtConteudo = listConteudo.length;
                totLocaisA = totLocaisA + parseInt(qtConteudo);
                document.write("Nesse roteiro são listados: " + qtConteudo +" locais")
        n = n +1; 
    }
    document.write("</ul>");
    document.write("<b>A soma de todos os locais dos Roteiros A é: </b>" + totLocaisA + "<br>");
// Mostrando os locais do centro de São Paulo
    var roteiroSP = quebrei[1].split("#");
    var centroSP = roteiroSP[2].split("<br>");
    var conteudocentroSP = centroSP[1].split(";");
    var qtConteudoSP = conteudocentroSP.length-1;
    var n = 0;
    document.write("Os locais do centro de São Paulo são:<ul>");
    while(n<=qtConteudoSP){
        document.write("<li>" + conteudocentroSP[n] + "</li>")
        n = n+1
    }
    document.write("</ul>");

// Mostrando os locais do Downtown Las Vegas
    var roteiroLV = quebrei[2].split("#");
    var centroLV = roteiroLV[2].split("<br>");
    var conteudocentroLV = centroLV[1].split(";");
    var qtConteudoLV = conteudocentroLV.length-1;
    var n = 1;
    document.write("Os locais de Downtown Las Vegas são:<ul>");
    while(n<qtConteudoLV){
        document.write("<li>" + conteudocentroLV[n] + "</li>")
        n = n+1;
    }
    document.write("</ul");

}