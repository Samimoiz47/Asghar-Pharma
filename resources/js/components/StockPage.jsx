import React, { useState, useEffect } from 'react';
import DarkVeil from './DarkVeil';
import ClickSpark from './ClickSpark';
import MagicBento from './MagicBento';
import GooeyNav from './GooeyNav';
import CrudButton from './CrudButton';
import './CrudButton.css';

const items = [
  { label: "Home", href: "/" },
  { label: "Stock", href: "/stock" },
];

const STOCK_KEY = 'medicine_stock_data';

const StockPage = () => {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', packets: 0, boxes: 0 });
  const [editIdx, setEditIdx] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STOCK_KEY);
    if (stored) setMedicines(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(STOCK_KEY, JSON.stringify(medicines));
  }, [medicines]);

  const handleCreate = () => {
    if (!form.name.trim() || !form.description.trim()) return;
    setMedicines([...medicines, { ...form }]);
    setForm({ name: '', description: '', packets: 0, boxes: 0 });
    setEditIdx(null);
  };

  const handleEdit = idx => {
    setEditIdx(idx);
    setForm(medicines[idx]);
  };

  const handleUpdate = () => {
    if (editIdx === null) return;
    const updated = medicines.map((med, idx) => idx === editIdx ? form : med);
    setMedicines(updated);
    setEditIdx(null);
    setForm({ name: '', description: '', packets: 0, boxes: 0 });
  };

  const handleDelete = () => {
    if (editIdx === null) return;
    setMedicines(medicines.filter((_, idx) => idx !== editIdx));
    setEditIdx(null);
    setForm({ name: '', description: '', packets: 0, boxes: 0 });
  };

  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <DarkVeil />
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
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <GooeyNav items={items} particleCount={15} particleDistances={[90, 10]} particleR={100} initialActiveIndex={1} animationTime={600} timeVariance={300} colors={[1, 2, 3, 1, 2, 3, 1, 4]} />
          </div>
        </div>
        <div style={{ marginTop: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
          <form onSubmit={e => { e.preventDefault(); editIdx === null ? handleCreate() : handleUpdate(); }}
            style={{
              display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 32,
              background: 'rgba(22,23,29,0.95)', padding: '16px 24px', borderRadius: 12,
              boxShadow: '0 0 0 1.5px #2b2c37, 0 0 25px -17px #000', width: 'fit-content', minWidth: 400, maxWidth: '90vw', fontFamily: 'inherit',
            }}>
            <label style={{ color: '#bdbecb', fontWeight: 600, marginRight: 4 }}>Name:</label>
            <input type="text" placeholder="Medicine Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #444', background: '#222', color: '#fff', minWidth: 120, fontSize: 16 }} />
            <label style={{ color: '#bdbecb', fontWeight: 600, marginRight: 4 }}>Description:</label>
            <input type="text" placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #444', background: '#222', color: '#fff', minWidth: 180, fontSize: 16 }} />
            <label style={{ color: '#bdbecb', fontWeight: 600, marginRight: 4 }}>Packets:</label>
            <input type="number" min="0" value={form.packets} onChange={e => setForm(f => ({ ...f, packets: parseInt(e.target.value, 10) || 0 }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #444', background: '#222', color: '#fff', width: 80, fontSize: 16 }} />
            <label style={{ color: '#bdbecb', fontWeight: 600, marginRight: 4 }}>Boxes:</label>
            <input type="number" min="0" value={form.boxes} onChange={e => setForm(f => ({ ...f, boxes: parseInt(e.target.value, 10) || 0 }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #444', background: '#222', color: '#fff', width: 80, fontSize: 16 }} />
            <CrudButton type="submit"><span style={{color:'#fff'}}>{editIdx === null ? 'Create' : 'Update'}</span></CrudButton>
            {editIdx !== null && <CrudButton type="button" onClick={handleDelete}><span style={{color:'#fff'}}>Delete</span></CrudButton>}
            {editIdx !== null && <CrudButton type="button" onClick={() => { setEditIdx(null); setForm({ name: '', description: '', packets: 0, boxes: 0 }); }}><span style={{color:'#fff'}}>Cancel</span></CrudButton>}
          </form>
          <div style={{ marginTop: 100 }}>
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
              medicines={medicines}
            />
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default StockPage;
