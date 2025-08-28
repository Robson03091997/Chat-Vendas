import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Edit, Save, X } from 'lucide-react';

const Admin = () => {
  const { plans, updatePlans } = useApp();
  const [editingPlan, setEditingPlan] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const editPlan = (plan) => {
    setEditingPlan(plan);
    setShowEditForm(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const updatedPlan = {
      ...editingPlan,
      name: formData.get('name'),
      price: parseFloat(formData.get('price')),
      originalPrice: parseFloat(formData.get('originalPrice')),
      discount: Math.round(((parseFloat(formData.get('originalPrice')) - parseFloat(formData.get('price'))) / parseFloat(formData.get('originalPrice'))) * 100)
    };

    const updatedPlans = plans.map(plan => 
      plan.id === editingPlan.id ? updatedPlan : plan
    );
    
    updatePlans(updatedPlans);
    setShowEditForm(false);
    setEditingPlan(null);
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Painel do Dono</h1>
        <p>Altere preços e informações dos planos</p>
      </header>

      <main className="admin-main">
        <h2>Planos Disponíveis</h2>
        
        <div className="plans-list">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-item">
              <div className="plan-info">
                <h3>{plan.name}</h3>
                <p>Preço: R$ {plan.price.toFixed(2)}</p>
                <p>Preço Original: R$ {plan.originalPrice.toFixed(2)}</p>
                <p>Desconto: {plan.discount}%</p>
              </div>
              <button 
                className="edit-btn"
                onClick={() => editPlan(plan)}
              >
                <Edit size={16} />
                Editar
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Edição Simples */}
      {showEditForm && editingPlan && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Editar {editingPlan.name}</h3>
              <button 
                className="close-btn"
                onClick={() => {
                  setShowEditForm(false);
                  setEditingPlan(null);
                }}
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="edit-form">
              <div className="form-group">
                <label>Nome do Plano</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingPlan.name}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preço com Desconto</label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  defaultValue={editingPlan.price}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preço Original</label>
                <input
                  type="number"
                  name="originalPrice"
                  step="0.01"
                  defaultValue={editingPlan.originalPrice}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  <Save size={16} />
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
