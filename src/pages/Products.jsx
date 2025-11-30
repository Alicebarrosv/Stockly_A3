// src/pages/Products.jsx

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ProductFormModal from './ProductFormModal'; 
import './Home.css'; 


const initialProductList = [
  
  { id: 1, name: 'Duna', code: '12345', category: 'Ficção Científica', quantity: 20, price: 65.00, status: 'Em estoque' },
  { id: 2, name: 'O Guia do Mochileiro das Galáxias', code: '56788', category: 'Ficção Científica', quantity: 50, price: 40.00, status: 'Em estoque' },
  { id: 3, name: 'Harry Potter e a Pedra Filosofal', code: '69847', category: 'Fantasia', quantity: 15, price: 45.00, status: 'Estoque Baixo' },
  { id: 4, name: 'O Senhor dos Anéis: A Sociedade do Anel', code: '91011', category: 'Fantasia', quantity: 0, price: 55.00, status: 'Esgotado' },
  
  { id: 5, name: 'It: A Coisa', code: '11223', category: 'Terror', quantity: 30, price: 50.00, status: 'Em estoque' },
  { id: 6, name: 'O Iluminado', code: '33445', category: 'Terror', quantity: 5, price: 52.00, status: 'Estoque Baixo' },
  
  { id: 7, name: 'Orgulho e Preconceito', code: '55667', category: 'Romance Clássico', quantity: 40, price: 35.00, status: 'Em estoque' },
  { id: 8, name: 'Como Eu Era Antes de Você', code: '77889', category: 'Romance Contemporâneo', quantity: 0, price: 38.00, status: 'Esgotado' },
  
  { id: 9, name: 'Garota Exemplar', code: '99001', category: 'Suspense', quantity: 25, price: 48.00, status: 'Em estoque' },
  { id: 10, name: 'Assassinato no Expresso do Oriente', code: '00112', category: 'Mistério', quantity: 12, price: 32.00, status: 'Estoque Baixo' },
  
  { id: 11, name: 'Death Note Vol. 1', code: '22334', category: 'Mangá', quantity: 60, price: 28.00, status: 'Em estoque' },
  { id: 12, name: 'Sandman: Prelúdios e Noturnos', code: '44556', category: 'HQ', quantity: 10, price: 75.00, status: 'Estoque Baixo' },
  
  { id: 13, name: 'Sapiens: Uma Breve História da Humanidade', code: '66778', category: 'História', quantity: 35, price: 80.00, status: 'Em estoque' },
  { id: 14, name: '1499: O Brasil Antes de Cabral', code: '88990', category: 'História', quantity: 0, price: 60.00, status: 'Esgotado' },
  
  { id: 15, name: '1984', code: '13579', category: 'Distopia', quantity: 22, price: 30.00, status: 'Em estoque' },
  { id: 16, name: 'Admirável Mundo Novo', code: '24680', category: 'Distopia', quantity: 18, price: 35.00, status: 'Em estoque' },
  { id: 17, name: 'O Código Da Vinci', code: '98765', category: 'Thriller', quantity: 5, price: 42.00, status: 'Estoque Baixo' },
  { id: 18, name: 'A Metamorfose', code: '54321', category: 'Literatura Clássica', quantity: 10, price: 20.00, status: 'Estoque Baixo' },
  { id: 19, name: 'Crime e Castigo', code: '11122', category: 'Literatura Clássica', quantity: 1, price: 55.00, status: 'Estoque Baixo' },
  { id: 20, name: 'Mistborn: O Império Final', code: '33344', category: 'Fantasia', quantity: 28, price: 68.00, status: 'Em estoque' },
  { id: 21, name: 'The Witcher: O Último Desejo', code: '55566', category: 'Fantasia', quantity: 0, price: 49.00, status: 'Esgotado' },
  { id: 22, name: 'Box Sherlock Holmes', code: '77788', category: 'Mistério', quantity: 14, price: 120.00, status: 'Em estoque' },
  { id: 23, name: 'O Hobbit', code: '99900', category: 'Fantasia', quantity: 26, price: 47.00, status: 'Em estoque' },
  { id: 24, name: 'Fogo & Sangue', code: '00011', category: 'História Fantástica', quantity: 3, price: 90.00, status: 'Estoque Baixo' },
  { id: 25, name: 'Cem Anos de Solidão', code: '22233', category: 'Realismo Mágico', quantity: 45, price: 44.00, status: 'Em estoque' },
  { id: 26, name: 'Ensaio Sobre a Cegueira', code: '44455', category: 'Distopia', quantity: 0, price: 39.00, status: 'Esgotado' },
  { id: 27, name: 'Drácula', code: '66677', category: 'Terror Clássico', quantity: 11, price: 29.00, status: 'Em estoque' },
  { id: 28, name: 'O Médico e o Monstro', code: '88899', category: 'Terror Clássico', quantity: 7, price: 25.00, status: 'Estoque Baixo' },
  { id: 29, name: 'Guardiões da Galáxia Vol. 1', code: '10101', category: 'HQ', quantity: 50, price: 55.00, status: 'Em estoque' },
  { id: 30, name: 'Os Inumanos', code: '12121', category: 'HQ', quantity: 0, price: 62.00, status: 'Esgotado' },
];
const StatusPill = ({ status }) => {
  const statusClass = status.toLowerCase().replace(' ', '-');
  return (
    <span className={`status-pill ${statusClass}`}>{status}</span>
  );
};

const Products = () => {
  const [products, setProducts] = useState(initialProductList);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');
  
  // 💡 NOVO ESTADO: Filtro por Categoria/Gênero
  const [categoryFilter, setCategoryFilter] = useState('Todos'); 
  // Estado anterior mantido
  const [statusFilter, setStatusFilter] = useState('Todos'); 
  
  const navigate = useNavigate(); 
  
  // 💡 Lista de categorias únicas para os botões de filtro
  const categories = useMemo(() => {
    const uniqueCategories = new Set(initialProductList.map(item => item.category));
    return ['Todos', ...Array.from(uniqueCategories).sort()];
  }, []);


  const filteredProducts = useMemo(() => {
    let filtered = products;

    // 1. FILTRAGEM POR TERMO DE BUSCA (Texto)
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.category.toLowerCase().includes(lowerCaseSearch)
      );
    }
    
    // 2. FILTRAGEM POR STATUS (Disponível/Esgotado)
    if (statusFilter !== 'Todos') {
      const targetStatus = statusFilter === 'Disponível' ? true : false;
      
      filtered = filtered.filter(item => {
        const isAvailable = item.quantity > 0;
        return isAvailable === targetStatus;
      });
    }

    // 3. 💡 FILTRAGEM POR CATEGORIA/GÊNERO (NOVO)
    if (categoryFilter !== 'Todos') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    return filtered;
    
  }, [products, searchTerm, statusFilter, categoryFilter]); // 💡 categoryFilter adicionado aqui

  
  const handleAddProduct = (newProduct) => {
    const newId = Math.max(...products.map(item => item.id), 0) + 1;
    setProducts(prev => [
      ...prev, 
      { 
        ...newProduct, 
        id: newId, 
        status: newProduct.quantity > 0 ? 'Em estoque' : 'Esgotado'
      }
    ]);
    setIsModalOpen(false); 
  };
  
  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(item => item.id !== id));
  }

  
  return (
    <div className="inventory-page">
      <header className="page-header">
        <h1 className="logo">Stockly</h1>
        <button className="logout-button" title="Sair">
          &#8594; 
        </button>
      </header>

      <h2 className="inventory-title">
        {products.length} Livros Cadastrados (Catálogo de Gêneros)
      </h2>

      
      <div className="action-bar-tabs">
        {/* ... (Busca e Tabs de Navegação - MANTIDO) ... */}
        <div className="search-and-tabs">
          <input 
            type="text" 
            placeholder="🔍 Digite o Título ou o Gênero do livro" 
            className="search-input-mockup"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="tab-buttons">
            <button className="tab-button" onClick={() => navigate('/home')}>Inventário (Estoque)</button> 
            <button className="tab-button active">Catálogo de Livros</button> 
            <button className="tab-button">Histórico de Movimentações</button>
          </div>
        </div>
        
        <button className="main-action-button" onClick={() => setIsModalOpen(true)}>
          Cadastrar Novo Livro
        </button>
      </div>

      {/* --------------------- BLOCO DE FILTROS (STATUS) --------------------- */}
      <div className="filter-controls" style={{ marginBottom: '15px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Filtrar por Status:</label>
        
        <button 
          className={`filter-button ${statusFilter === 'Todos' ? 'active' : ''}`}
          onClick={() => setStatusFilter('Todos')}
          style={{ padding: '8px 15px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}
        >
          Todos
        </button>
        
        <button 
          className={`filter-button ${statusFilter === 'Disponível' ? 'active' : ''}`}
          onClick={() => setStatusFilter('Disponível')}
          style={{ padding: '8px 15px', border: '1px solid #4CAF50', backgroundColor: statusFilter === 'Disponível' ? '#E8F5E9' : 'white', borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}
        >
          Disponíveis
        </button>
        
        <button 
          className={`filter-button ${statusFilter === 'Esgotado' ? 'active' : ''}`}
          onClick={() => setStatusFilter('Esgotado')}
          style={{ padding: '8px 15px', border: '1px solid #F44336', backgroundColor: statusFilter === 'Esgotado' ? '#FFEBEE' : 'white', borderRadius: '4px', cursor: 'pointer' }}
        >
          Esgotados
        </button>
      </div>
      {/* --------------------- FIM DO FILTRO STATUS --------------------- */}

      {/* --------------------- 💡 NOVO BLOCO DE FILTROS (CATEGORIA) --------------------- */}
      <div className="filter-controls" style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Filtrar por Gênero/Categoria:</label>
        
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-button ${categoryFilter === cat ? 'active' : ''}`}
            onClick={() => setCategoryFilter(cat)}
            style={{ 
              padding: '8px 15px', 
              border: '1px solid #337ab7', // Um estilo diferente para diferenciar
              backgroundColor: categoryFilter === cat ? '#e6f0ff' : 'white', 
              borderRadius: '4px', 
              marginRight: '5px', 
              cursor: 'pointer',
              color: categoryFilter === cat ? '#337ab7' : '#333'
            }}
          >
            {cat}
          </button>
        ))}
        <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>
            Livros Exibidos: {filteredProducts.length}
        </span>
      </div>
      {/* --------------------- FIM DO FILTRO CATEGORIA --------------------- */}


      {/* --------------------- TABELA DE PRODUTOS (MANTIDA) --------------------- */}
      <div className="inventory-table-container">
        <table>
          <thead>
            <tr>
              <th className="column-name">Título do Livro</th>
              <th>Gênero/Categoria</th> 
              <th>Status</th>
              <th className="column-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(item => (
              <tr key={item.id}>
                <td className="column-name">{item.name}</td>
                <td>{item.category}</td> 
                <td>
                  <StatusPill status={item.quantity > 0 ? 'Disponível' : 'Esgotado'} />
                </td>
                <td className="column-actions">
                  <div className="action-icons">
                    <button className="icon-button" title="Ver Detalhes">📄</button>
                    <button className="icon-button" title="Editar">✏️</button>
                    <button 
                      className="icon-button delete-btn" 
                      title="Excluir"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="4" className="no-results">Nenhum livro encontrado com os filtros atuais.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && (
        <ProductFormModal 
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddProduct}
        />
      )}
    </div>
  );
};

export default Products;