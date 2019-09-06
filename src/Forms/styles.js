import styled, { css } from 'styled-components';

export const MyForm = styled('form')`
  width: 100%;
  max-width: 22rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-self:center;
`

export const H1 = styled('h1')`
  margin-bottom: 2rem;
  margin-top: 2rem;

  font-size: var(--font-size-xl);
  font-weight: 300;
  text-align: center;
  text-transform: capitalize;

  ${({ fade }) =>
    fade &&
    css`
      opacity: var(--opacity-disabled);
    `}
`
export const Label = styled('label')`
  margin-bottom: 0.5rem;

  font-size: var(--font-size-s);
  color: var(--color-txt-light);
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: var(--opacity-disabled);
    `}
`
export const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center
`

export const Input = styled('input')`
  margin-bottom: 0.5rem;
  padding: 1rem;

  border: 2px solid #EEE;

  /* removes chrome's yellow background */
  &,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: var(--color-txt-dark);
    box-shadow: 0 0 0px 1000px var(--color-background) inset;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-background) inset;
  }

  :focus {
    outline: none;
    
  }

  :disabled {
    opacity: var(--opacity-disabled);
  }

  ::placeholder {
    opacity: var(--opacity-placeholder);
  }

`

export const Button = styled('button')`
  padding: 1rem;
  margin: 1rem 0 0.5rem;

  text-transform: uppercase;

  cursor: pointer;
  color: black;
  border-color: hotpink;
  background:transparent;

  :hover,
  :focus,
  :active {
    outline: none;
    background: hotpink;
    border: 2px solid hotpink;
    box-shadow: hotpink;
    color:#FFF    
  }

  :disabled {
    opacity: ${({ loading }) => (loading ? 1 : 'var(--opacity-disabled)')};
    box-shadow: none;
    border-color: var(--color-border-disabled);
  }
`

export const ErrMsg = styled('p')`
  min-height: calc(var(--font-size-s) * var(--line-height));
  margin-bottom: 0.5rem;

  font-size: var(--font-size-s);
  color: var(--color-err);
`
