export const copy = () => {
  return app.gulp
    .src(app.path.src.mocData)
    .pipe(app.gulp.dest(app.path.dist.mocData));
};
