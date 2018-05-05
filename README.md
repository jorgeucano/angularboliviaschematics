# Demos of Angular Bolivia Talk about schematics

### Instalar schematics
<pre>
npm i -g @angular-devkit/{schematics,schematics-cli,core} @schematics/schematics
</pre>

#### ==============
### Generar Tu primer schematics
### DEMO 1
#### ==============
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

#### ==============
### Creando un schematics mas power
### DEMO 2
#### ==============
<pre>
schematics blank --name=angular-bolivia-landing
</pre>
<li>Modificamos el <code>collection.json</code>
<li>Creamos el <code>angular-bolivia-landing/schema.json</code>
<li> Creamos la interfaz <code>angular-bolivia-landing/schema.ts</code>
<li> Empezamos a programar el <code>angular-bolivia-landing/index.ts</code> (magic time)
<li> Creamos <code>angular-bolivia-landing/files/</code> y ponemos nuestro theme
 
 <pre>
npm run build
schematics .:angular-bolivia-landing
</pre>
 
 ### cremos nuestra app
 
<pre>
ng new angular-boliva
cd angular-bolivia
mkdir node_modules/abl
cp -R ../angular-bolivia-landing/* node_modules/abl
rm -rf node_modules/abl/node_modules 
rm node_modules/abl/package-lock.json 
ng g abl:angular-bolivia-landing --service --name="angular bolivia rocks" --collection abl
</pre>
Declaramos en el <code>app.module.ts</code> nuestro componente <br/>
Lo agregamos a nuestro <code>app.component.html</code> <br/>
Agregamos un input de datos para la iteracion