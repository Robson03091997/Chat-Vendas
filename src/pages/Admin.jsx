import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Edit, Save, X, Plus } from 'lucide-react';

const Admin = () => {
  const { plans, updatePlans, addPlan, coupons } = useApp();
  const [editingPlan, setEditingPlan] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

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
      description: formData.get('description'),
      duration: formData.get('duration'),
      numberOfClasses: parseInt(formData.get('numberOfClasses')),
      classDuration: formData.get('classDuration'),
      price: parseFloat(formData.get('price')),
      originalPrice: parseFloat(formData.get('originalPrice')),
      availableCoupons: formData.get('availableCoupons').split(',').map(c => c.trim()).filter(c => c),
      discount: Math.round(((parseFloat(formData.get('originalPrice')) - parseFloat(formData.get('price'))) / parseFloat(formData.get('originalPrice'))) * 100)
    };

    const updatedPlans = plans.map(plan =>
      plan.id === editingPlan.id ? updatedPlan : plan
    );

    updatePlans(updatedPlans);
    setShowEditForm(false);
    setEditingPlan(null);
  };

  const handleAddPlan = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newPlan = {
      id: Math.max(...plans.map(p => p.id)) + 1,
      name: formData.get('name'),
      description: formData.get('description'),
      duration: formData.get('duration'),
      numberOfClasses: parseInt(formData.get('numberOfClasses')),
      classDuration: formData.get('classDuration'),
      price: parseFloat(formData.get('price')),
      originalPrice: parseFloat(formData.get('originalPrice')),
      features: formData.get('features').split(',').map(f => f.trim()).filter(f => f),
      availableCoupons: formData.get('availableCoupons').split(',').map(c => c.trim()).filter(c => c),
      isPopular: false,
      discount: Math.round(((parseFloat(formData.get('originalPrice')) - parseFloat(formData.get('price'))) / parseFloat(formData.get('originalPrice'))) * 100)
    };

    addPlan(newPlan);
    setShowAddForm(false);
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Painel do Dono</h1>
        <p>Altere preços e informações dos planos</p>
      </header>

            <main className="admin-main">
        <div className="admin-actions">
          <h2>Planos Disponíveis</h2>
          <button
            className="add-plan-btn"
            onClick={() => setShowAddForm(true)}
          >
            <Plus size={16} />
            Adicionar Plano
          </button>
        </div>

        <div className="plans-list">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-item">
              <div className="plan-info">
                <h3>{plan.name}</h3>
                <p>Descrição: {plan.description}</p>
                <p>Duração: {plan.duration}</p>
                <p>Número de aulas: {plan.numberOfClasses}</p>
                <p>Duração da aula: {plan.classDuration}</p>
                <p>Preço: R$ {plan.price.toFixed(2)}</p>
                <p>Preço Original: R$ {plan.originalPrice.toFixed(2)}</p>
                <p>Desconto: {plan.discount}%</p>
                <p>Cupons disponíveis: {plan.availableCoupons?.join(', ') || 'Nenhum'}</p>
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
                      <label>Descrição</label>
                      <textarea
                        name="description"
                        rows="3"
                        defaultValue={editingPlan.description}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Duração do Curso</label>
                      <input
                        type="text"
                        name="duration"
                        placeholder="Ex: 6 meses"
                        defaultValue={editingPlan.duration}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Número de Aulas</label>
                      <input
                        type="number"
                        name="numberOfClasses"
                        min="1"
                        defaultValue={editingPlan.numberOfClasses}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Duração da Aula</label>
                      <input
                        type="text"
                        name="classDuration"
                        placeholder="Ex: 60 minutos"
                        defaultValue={editingPlan.classDuration}
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

                    <div className="form-group">
                      <label>Cupons Disponíveis</label>
                      <input
                        type="text"
                        name="availableCoupons"
                        placeholder="Ex: BEMVINDO20, PROMO30"
                        defaultValue={editingPlan.availableCoupons?.join(', ')}
                      />
                      <small>Separe os cupons por vírgula</small>
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

      {/* Modal de Adicionar Plano */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Adicionar Novo Plano</h3>
              <button
                className="close-btn"
                onClick={() => setShowAddForm(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddPlan} className="edit-form">
              <div className="form-group">
                <label>Nome do Plano</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ex: Premium"
                  required
                />
              </div>

              <div className="form-group">
                <label>Descrição</label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Descreva o plano..."
                  required
                />
              </div>

              <div className="form-group">
                <label>Duração do Curso</label>
                <input
                  type="text"
                  name="duration"
                  placeholder="Ex: 6 meses"
                  required
                />
              </div>

              <div className="form-group">
                <label>Número de Aulas</label>
                <input
                  type="number"
                  name="numberOfClasses"
                  min="1"
                  placeholder="Ex: 48"
                  required
                />
              </div>

              <div className="form-group">
                <label>Duração da Aula</label>
                <input
                  type="text"
                  name="classDuration"
                  placeholder="Ex: 60 minutos"
                  required
                />
              </div>

              <div className="form-group">
                <label>Preço com Desconto</label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  placeholder="199.90"
                  required
                />
              </div>

              <div className="form-group">
                <label>Preço Original</label>
                <input
                  type="number"
                  name="originalPrice"
                  step="0.01"
                  placeholder="299.90"
                  required
                />
              </div>

              <div className="form-group">
                <label>Características do Plano</label>
                <textarea
                  name="features"
                  rows="4"
                  placeholder="Ex: Aulas 2x por semana, Material incluído, Certificado"
                  required
                />
                <small>Separe as características por vírgula</small>
              </div>

              <div className="form-group">
                <label>Cupons Disponíveis</label>
                <input
                  type="text"
                  name="availableCoupons"
                  placeholder="Ex: BEMVINDO20, PROMO30"
                />
                <small>Separe os cupons por vírgula (opcional)</small>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  <Plus size={16} />
                  Adicionar Plano
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
