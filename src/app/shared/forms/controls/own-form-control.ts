import { AbstractControlOptions, AsyncValidatorFn, FormControl, FormControlOptions, ValidatorFn } from "@angular/forms";


type FormControlState = '' | 'error';
type MessagesByErrorKey = { [key: string]: string }

type FormControlStateValue = 'dirty' | 'touched';
type OwnFormControlOptions = {
  defaultMessage?: string;
  messagesByErrorKey?: MessagesByErrorKey;
  strategy?: FormControlStateValue;
}

export interface FormControlStrategy {
  validate(control: OwnFormControl<any>): FormControlState;
}

export class FormControlDirtyValidateStrategy implements FormControlStrategy {
  validate(control: OwnFormControl<unknown>): FormControlState {
    return control.invalid && control.dirty ? 'error' : '';
  }
}
export class FormControlTouchedValidateStrategy implements FormControlStrategy {
  validate(control: OwnFormControl<unknown>): FormControlState {
    return control.invalid && control.touched ? 'error' : '';
  }
}

export class OwnFormControl<T> extends FormControl<T | null> {
  private defaultMessage: string = '';
  private messagesByErrorKey: MessagesByErrorKey = {};
  private dirtyStrategy: FormControlStrategy = new FormControlDirtyValidateStrategy();
  private touchedStrategy: FormControlStrategy = new FormControlTouchedValidateStrategy();
  private strategy: FormControlStrategy = this.dirtyStrategy;

  constructor(
    initialValue: T,
    options?: FormControlOptions & OwnFormControlOptions
  ) {
    super(initialValue, { ...options, nonNullable: true });

    const {
      defaultMessage = '',
      messagesByErrorKey = {},
      strategy = 'dirty'
    } = options || {};


    this.defaultMessage = defaultMessage;
    this.messagesByErrorKey = messagesByErrorKey;
    this.setStrategy(strategy);
  }

  public message(): string {
    return this.getDefaultOrErrorMessage();
  }

  private getDefaultOrErrorMessage(): string {
    let message = this.defaultMessage;
    if (this.errors) {
      const errorKey = Object.keys(this.errors)[0];
      message = this.messagesByErrorKey[errorKey] || message;
    }
    return message;
  }

  public errorMessages(): string[] {
    const errors = this.errors || {};
    return Object.keys(errors).map(errorKey => {
      return this.messagesByErrorKey[errorKey] || `Error: ${errorKey} (don't have a message defined)`;
    });
  }

  public setStrategy(strategy: FormControlStateValue) {
    if (strategy === 'dirty') {
      this.strategy = this.dirtyStrategy;
      return;
    }

    this.strategy = this.touchedStrategy;
  }

  public setDefaultMessage(defaultMessage: string) {
    this.defaultMessage = defaultMessage;
  }

  public setMessagesByErrorKey(messagesByErrorKey: MessagesByErrorKey) {
    this.messagesByErrorKey = { ...this.messagesByErrorKey, ...messagesByErrorKey };
  }

  public state(): FormControlState {
    return this.strategy.validate(this);
  }
}
