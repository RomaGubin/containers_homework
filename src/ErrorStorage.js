class ErrorRepository {
  constructor() {
    this.data = new Map();
    errorsData.forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key, value) {
    this.data.set(key, value);
  };

  translate(code) {
    return this.data.has(code) ? this.data.get(code) : 'Unknown error';
  }
}

const errorsData = [
  ['444', 'Character already exists in the team'],
];

export default ErrorRepository;