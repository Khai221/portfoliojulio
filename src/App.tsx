import { useState, useEffect } from 'react';
import { Container } from './components/MainContainer/styles';
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { Sobremim } from './components/Sobremim';
import { Projetos } from './components/Projetos';
import { Contato } from './components/Contato';

function App() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('.secao');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
            setActiveSection(id || '');
          }
        });
      },
      {
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.5, 
      }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Container>
      <Header activeSection={activeSection} />
      <Inicio />
      <Sobremim />
      <Projetos />
      <Contato />
    </Container>
  );
}

export default App;