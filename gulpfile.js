const gulp = require('gulp'); //A linha cria uma constante chamada gulp que carrega o módulo gulp.
const sass = require('gulp-sass')(require('sass')); //A linha cria uma constante chamada sass que carrega o módulo gulp-sass e passa como argumento o módulo Sass.
const uglify = require('gulp-uglify'); // A linha cria uma constante chamada imagemin que carrega o módulo gulp-imagemin.
const imagemin = require('gulp-imagemin');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}  
//A função scripts utiliza a constante gulp para carregar arquivos JavaScript que estão dentro da pasta src/scripts. Em seguida, os arquivos são processados com o gulp-uglify, que minifica o código JavaScript. Por fim, o arquivo processado é salvo na pasta dist/js.


function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}
// A função styles utiliza a constante gulp para carregar arquivos Sass que estão dentro da pasta src/styles. Em seguida, os arquivos são processados com o gulp-sass, que converte os arquivos Sass em arquivos CSS e adiciona a propriedade outputStyle: 'compressed' para minificar o CSS. Por fim, o arquivo processado é salvo na pasta dist/css.

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}
//A função images utiliza a constante gulp para carregar arquivos de imagem que estão dentro da pasta src/images. Em seguida, os arquivos são processados com o gulp-imagemin, que otimiza as imagens. Por fim, o arquivo processado é salvo na pasta dist/images.

exports.default = gulp.parallel(styles, images, scripts);
// A linha define a tarefa padrão do Gulp, que é executada quando o comando gulp é executado no terminal. Essa tarefa paralela chama as funções styles, images e scripts.

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}
// A linha define uma tarefa de observação que monitora mudanças em arquivos Sass e JavaScript. Quando ocorrem mudanças, as tarefas styles e scripts são executadas novamente.