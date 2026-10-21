import GenericTenantLanding from './GenericTenantLanding';

/**
 * Active public experience for Colégio Horizonte do Futuro.
 * The reference-led composition lives in the reusable tenant landing component
 * so the public route and future tenant presentation stay on one implementation.
 */
export default function HorizonteLanding() {
  return <GenericTenantLanding />;
}
