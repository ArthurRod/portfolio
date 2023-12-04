interface VideoProps {
  path: string;
  poster: string;
}

export function Video({ path, poster }: VideoProps) {
  return (
    <video poster={poster} muted autoPlay loop>
      <source src={path} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
}
