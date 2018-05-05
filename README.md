# Demos of Angular Bolivia Talk about schematics

### Instalar schematics
<pre>
npm i -g @angular-devkit/{schematics,schematics-cli,core} @schematics/schematics
</pre>

### Generar Tu primer schematics
<pre>
schematics blank --name=hello-angular-bolivia
</pre>
Genera <code>hello-angular-bolivia</code>

<code>collection.json</code> => es el start de todo esto (spoiler alert la factoria tiene la magia)
Compilar nuestro código
<pre>
npm run build
</pre>
Generar nuestro schematics
<pre>
schematics .:hello-angular-bolivia --name=hello-angular-bolivia
</pre>