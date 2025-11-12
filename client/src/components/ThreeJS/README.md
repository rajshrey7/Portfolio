# Three.js Components

Professional, well-structured Three.js components for the portfolio application.

## Architecture

This directory contains a modular, maintainable Three.js implementation with:

- **Centralized Configuration**: All constants and settings in `constants.js`
- **Reusable Hooks**: Custom hooks for common animation patterns
- **Component Organization**: Clean separation of concerns
- **Performance Optimizations**: Memoization and efficient rendering
- **Type Safety**: JSDoc comments for better IDE support

## Structure

```
ThreeJS/
├── constants.js              # Centralized configuration
├── hooks/
│   ├── useRotation.js       # Rotation animation hooks
│   └── useAnimationFrame.js  # Frame-based animation hook
├── Scene3D.js               # Main scene wrapper
├── ProfessionalHeroScene.js # Hero section 3D scene
├── ProfessionalParticleNetwork.js # Particle network system
├── ProfessionalTechStack.js # Tech stack visualization
├── ProfessionalWireframe.js # Wireframe grid pattern
├── index.js                 # Centralized exports
└── README.md                # This file
```

## Usage

### Basic Usage

```jsx
import { Scene3D, SCENE_TYPES } from '../components/ThreeJS';

// Simple usage with defaults
<Scene3D type={SCENE_TYPES.HERO} />

// With custom configuration
<Scene3D 
  type={SCENE_TYPES.PARTICLES}
  particleConfig={{ count: 1000, radius: 15 }}
/>
```

### Available Scene Types

- `SCENE_TYPES.HERO` - Hero section with floating geometries
- `SCENE_TYPES.PARTICLES` - Particle network system
- `SCENE_TYPES.TECH` - Tech stack visualization
- `SCENE_TYPES.WIREFRAME` - Wireframe grid pattern

### Custom Hooks

```jsx
import { useRotation, useTimeBasedRotation } from '../components/ThreeJS';

// Continuous rotation
const meshRef = useRotation(0.002, 0.003, 'all');

// Time-based rotation
const groupRef = useTimeBasedRotation(0.05, 'y');
```

## Configuration

All configuration is centralized in `constants.js`:

- **Camera Settings**: Pre-configured for each scene type
- **Material Properties**: Consistent material configurations
- **Animation Speeds**: Standardized animation parameters
- **Color Palette**: Unified color scheme
- **Geometry Sizes**: Consistent sizing

## Performance Considerations

- Uses `useMemo` for expensive calculations
- Efficient buffer geometry updates
- Optimized particle systems
- Proper cleanup in hooks

## Best Practices

1. **Use Constants**: Always import from `constants.js` instead of hardcoding values
2. **Memoization**: Use `useMemo` for geometry and configuration arrays
3. **Hooks**: Leverage custom hooks for common patterns
4. **Documentation**: Add JSDoc comments for new components
5. **Performance**: Monitor frame rates and optimize when needed

## Adding New Scenes

1. Create component in `ThreeJS/` directory
2. Add configuration to `constants.js`
3. Export from `index.js`
4. Add case to `Scene3D.js` renderScene function
5. Document with JSDoc comments

## Examples

See usage in:
- `sections/HeroSection.js` - Hero and tech scenes
- `sections/AboutSection.js` - Particle network
- `sections/ProjectsSection.js` - Wireframe background

