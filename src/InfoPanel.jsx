import React from 'react';
import * as THREE from 'three';

function InfoPanel({
  object,
  onClose,
  onColorChange,
  onMaterialChange,
  onWireframeToggle,
  onTransparentToggle,
  onOpacityChange,
  onDepthTestToggle,
  onDepthWriteToggle,
  onAlphaTestToggle,
  onSideChange,
  onFlatShadingToggle,
  onVertexColorsToggle,
  onGeometryChange,
  onSizeChange,
  onExport,
}) {
  if (!object) return null;
  const { geometry, material, name } = object;
  const materialTypes = [
    'MeshBasicMaterial',
    'MeshLambertMaterial',
    'MeshPhongMaterial',
    'MeshStandardMaterial',
    'MeshNormalMaterial',
    'MeshPhysicalMaterial',
    'MeshToonMaterial',
    'MeshMatcapMaterial'
  ];
  const sideOptions = [
    { label: 'Front Side', value: THREE.FrontSide },
    { label: 'Back Side', value: THREE.BackSide },
    { label: 'Double Side', value: THREE.DoubleSide },
  ];
  const geometryOptions = [
    { label: 'Cone', value: 'ConeGeometry' },
    { label: 'Cube', value: 'BoxGeometry' },
    { label: 'Sphere', value: 'SphereGeometry' },
  ];
return (
    <div className="info-panel">
      <div className="info-header">
        <h2>Info Panel</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="info-content">
        <p><strong>Name:</strong> {name ? name : 'Unnamed'}</p>
        <p><strong>Type:</strong> {geometry.type}</p>
        <p><strong>Material:</strong> {material.type}</p>
        {material && (
          <div className="input-group">
            <label>Color</label>
            <input
              type="color"
              value={`#${material.color ? material.color.getHexString() : 'ffffff'}`}
              onChange={(e) => onColorChange(object, e.target.value)}
            />
          </div>
        )}
      <div className="input-group">
          <label>Material</label>
          <select value={material.type} onChange={(e) => onMaterialChange(object, e.target.value)}>
            {materialTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={material.wireframe}
              onChange={() => onWireframeToggle(object)}
            />
            <span className="checkmark"></span>
            Wireframe
          </label>
        </div>
      <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={material.transparent}
              onChange={() => onTransparentToggle(object)}
            />
            <span className="checkmark"></span>
            Transparent
          </label>
        </div>
        {material.transparent && (
          <div className="input-group">
            <label>Opacity</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={material.opacity}
              onChange={(e) => onOpacityChange(object, parseFloat(e.target.value))}
            />
          </div>
        )}
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={material.depthTest}
              onChange={() => onDepthTestToggle(object)}
            />
            <span className="checkmark"></span>
            Depth Test
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={material.depthWrite}
              onChange={() => onDepthWriteToggle(object)}
            />
            <span className="checkmark"></span>
            Depth Write
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={object.material.alphaTest > 0}
              onChange={() => onAlphaTestToggle(object)}
            />
            <span className="checkmark"></span>
            Alpha Hash
          </label>
        </div>
        <div className="input-group">
          <label>Side</label>
          <select
            value={material.side}
            onChange={(e) => onSideChange(object, parseInt(e.target.value))}
          >
            {sideOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={material.flatShading}
              onChange={() => onFlatShadingToggle(object)}
            />
            <span className="checkmark"></span>
            Flat Shading
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={material.vertexColors !== THREE.NoColors}
              onChange={() => onVertexColorsToggle(object)}
            />
            <span className="checkmark"></span>
            Vertex Colors
          </label>
        </div>
        <div className="input-group">
          <label>Geometry</label>
          <select value={geometry.type} onChange={(e) => onGeometryChange(object, e.target.value)}>
            {geometryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>Size</label>
          <input
            type="number"
            step="0.1"
            value={object.scale.x}
            onChange={(e) => onSizeChange(object, parseFloat(e.target.value))}
          />
        </div>
        <button className="export-button" onClick={onExport}>Export</button>
      </div>
    </div>
  );
}
export default InfoPanel;