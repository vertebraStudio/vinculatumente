'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

// ============================================================
// Registro de styled-jsx para el App Router.
// Sin esto, los <style jsx> de los componentes NO van en el HTML del
// servidor: la página se pinta sin estilos y todo "salta" al cargar el JS
// (CLS ~1.0 en la home). Con el registro se inyectan en el HTML inicial.
// ============================================================

export default function StyledJsxRegistry({ children }) {
  const [registry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = registry.styles();
    registry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={registry}>{children}</StyleRegistry>;
}
