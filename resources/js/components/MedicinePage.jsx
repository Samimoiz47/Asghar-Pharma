import React, { useState } from 'react';
import DarkVeil from './DarkVeil';
import ClickSpark from './ClickSpark';
import MagicBento from './MagicBento';
import GooeyNav from './GooeyNav';

import MedicineSearchBar from './MedicineSearchBar';
import './MedicineSearchBar.css';
import CrudButtons from './CrudButtons';
import CrudButton from './CrudButton';
import './CrudButton.css';
import pakistanMedicines from '../pakistan_medicines.json';

// update with your own items
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


const initialMedicines = pakistanMedicines;


const MedicinePage = () => {
  const [search, setSearch] = useState('');
  const [medicines, setMedicines] = useState(initialMedicines);
  const [filtered, setFiltered] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSearch = (query) => {
    setSearch(query);
    if (!query) {
      setFiltered([]);
    } else {
      setFiltered(
        medicines.filter(med =>
          med.name.toLowerCase().includes(query.toLowerCase()) ||
          med.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  // CRUD Handlers
  const handleCreate = () => {
    if (!form.name.trim() || !form.description.trim()) return;
    setMedicines([...medicines, { name: form.name, description: form.description }]);
    setForm({ name: '', description: '' });
    if (search) handleSearch(search);
  };

  const handleRead = () => {
    setFiltered(medicines);
    setSearch('');
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setForm(medicines[idx]);
  };

  const handleUpdate = () => {
    if (editIdx === null) return;
    const updated = medicines.map((med, idx) => idx === editIdx ? form : med);
    setMedicines(updated);
    setEditIdx(null);
    setForm({ name: '', description: '' });
    if (search) handleSearch(search);
  };

  const handleDelete = () => {
    if (editIdx === null) return;
    const updated = medicines.filter((_, idx) => idx !== editIdx);
    setMedicines(updated);
    setEditIdx(null);
    setForm({ name: '', description: '' });
    if (search) handleSearch(search);
  };

  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <DarkVeil />
        {/* Top bar: nav left/center, search right */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: 70,
          zIndex: 20,
          background: 'rgba(22,23,29,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          boxSizing: 'border-box',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MedicineSearchBar data={medicines} onSearch={handleSearch} />
          </div>
        </div>
        {/* Main content below top bar */}
        <div style={{
          marginTop: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: 'calc(100vh - 90px)',
          overflowY: 'auto',
          paddingBottom: 20,
        }}>
          {/* Horizontal CRUD bar */}
          <form onSubmit={e => { e.preventDefault(); editIdx === null ? handleCreate() : handleUpdate(); }}
            style={{
              position: 'sticky',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'row',
              gap: 12,
              alignItems: 'center',
              background: 'rgba(22,23,29,0.95)',
              padding: '16px 24px',
              borderRadius: 12,
              boxShadow: '0 0 0 1.5px #2b2c37, 0 0 25px -17px #000',
              width: 'fit-content',
              minWidth: 400,
              maxWidth: '90vw',
              fontFamily: 'inherit',
              zIndex: 15,
              marginBottom: 20,
            }}>
            <label style={{ color: '#bdbecb', fontWeight: 600, marginRight: 4 }}>Name:</label>
            <input
              type="text"
              placeholder="Medicine Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={{ padding: 8, borderRadius: 6, border: '1px solid #444', background: '#222', color: '#fff', minWidth: 120, fontSize: 16 }}
            />
            <label style={{ color: '#bdbecb', fontWeight: 600, marginRight: 4 }}>Description:</label>
            <input
              type="text"
              placeholder="Description"
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              style={{ padding: 8, borderRadius: 6, border: '1px solid #444', background: '#222', color: '#fff', minWidth: 180, fontSize: 16 }}
            />
            <CrudButton type="submit">{editIdx === null ? 'Create' : 'Update'}</CrudButton>
            {editIdx !== null && <CrudButton type="button" onClick={handleDelete}>Delete</CrudButton>}
            {editIdx !== null && <CrudButton type="button" onClick={() => { setEditIdx(null); setForm({ name: '', description: '' }); }}>Cancel</CrudButton>}
            <CrudButton type="button" onClick={handleRead}>Show All</CrudButton>
          </form>
          {/* MagicBento shows medicine data as cards */}
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            medicines={search && search.length > 0 ? filtered : medicines}
          />
        </div>
      </div>
    </ClickSpark>
  );
};

export default MedicinePage;
