<template>
  <div id="semanticui">
    <a
      class="git-link"
      target="_blank"
      href="https://github.com/RajovicMirko/vue-form-terminator-live/blob/master/src/views/SemanticUI.vue"
    >Git page code sample</a>

    <vue-form-terminator v-bind="formSetup" :model="model" @submited="handleSubmit"></vue-form-terminator>
  </div>
</template>

<script>
export default {
  name: "SemanticUI",

  data() {
    return {
      model: {
        firstName: "John",
        lastName: "Doe",
        address: "Test street address",
        addressNumber: "123",
        username: "JohnDoe",
        email: "john.doe@gmail.com",
        password: "12345",
        repeatPassword: "12345",
      },

      formSetup: {
        title: "SemanticUI sample",

        positioning: {
          title: "left",
          input: {
            label: "top center",
            text: "center",
            errorMessage: "bottom center",
          },
        },

        body: [
          {
            isGroup: true,
            title: "Personal data",
            otherClasses: "outline group-1",
            elements: [
              {
                id: "firstName",
                name: "FirstName",
                type: "text",
                label: "First name",
                placeholder: "",
                otherClasses: "ui input",
                validations: {
                  required: {
                    message: "First name is required",
                  },
                  max: {
                    value: 30,
                    message: "First name must have less then 20 characters",
                  },
                },
              },
              {
                id: "lastName",
                name: "LastName",
                type: "text",
                label: "Last name",
                placeholder: "",
                otherClasses: "ui input",
                validations: {
                  required: {
                    message: "Last name is required",
                  },
                  max: {
                    value: 30,
                    message: "Last name must have less then 20 characters",
                  },
                },
              },
              {
                id: "address",
                name: "Address",
                type: "text",
                label: "Address",
                placeholder: "",
                otherClasses: "ui input",
                validations: {
                  required: {
                    message: "Address is required",
                  },
                },
              },
              {
                id: "addressNumber",
                name: "HouseNumber",
                type: "number",
                label: "No.",
                placeholder: "",
                otherClasses: "ui input",
                validations: {
                  required: {
                    message: "No. is required",
                  },
                  numberOnly: {
                    message: "Only numbers allowed",
                  },
                },
              },
            ],
          },
          {
            id: "username",
            name: "Username",
            type: "text",
            label: "Username",
            placeholder: "",
            otherClasses: "ui input",
            validations: {
              required: {
                message: "Username is required",
              },
              max: {
                value: 20,
                message: "Username must have less then 20 characters",
              },
            },
          },
          {
            id: "email",
            name: "Email",
            type: "text",
            label: "Email",
            placeholder: "",
            otherClasses: "ui input",
            validations: {
              required: {
                message: "Email is required",
              },
              email: {
                message: "Email must be a valid email",
              },
            },
          },
          {
            id: "password",
            name: "Password",
            type: "password",
            label: "Password",
            placeholder: "",
            otherClasses: "ui input",
            validations: {
              required: {
                message: "Password is required",
              },
              min: {
                value: 5,
                message: "Pasword must have more then 5 characters",
              },
              max: {
                value: 20,
                message: "Pasword must have less then 20 characters",
              },
            },
          },
          {
            id: "repeatPassword",
            name: "RepeatPassword",
            type: "password",
            label: "Repeat Password",
            placeholder: "",
            otherClasses: "ui input",
            validations: {
              required: {
                message: "Repeat Pasword is required",
              },
              min: {
                value: 5,
                message: "Must have more then 5 characters",
              },
              max: {
                value: 20,
                message: "Repeat Pasword must have less then 20 characters",
              },
              compareElements: {
                value: "password",
                message: "Repeat Password must be equal as password",
              },
            },
          },
        ],

        actions: [
          {
            id: "submit",
            name: "Submit",
            type: "submit",
            icon: "fas fa-check-circle",
            otherClasses: "ui primary button custom-button",
          },
          {
            id: "reset",
            name: "Reset",
            type: "Reset",
            icon: "fas fa-times-circle",
            otherClasses: "ui yellow basic button custom-button",
          },
        ],
      },
    };
  },

  methods: {
    handleSubmit(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
$primary: #2185d0;

#semanticui {
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  color: $primary;

  & .vue-form-terminator {
    width: 50%;
    min-width: 300px;

    & .inputnator {
      width: 100%;
    }

    & .group {
      &.group-1 {
        & .group-data {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 0 1rem;

          & .firstName {
            grid-column: 1/6;
          }
          & .lastName {
            grid-column: 1/6;
          }
          & .address {
            grid-column: 1/4;
          }
          & .addressNumber {
            grid-column: 4/6;
          }
        }
      }
    }

    & .buttonator {
      margin-top: 1rem;
      & button {
        margin-bottom: 1rem;
      }
    }

    @media (min-width: 768px) {
      & .group {
        &.group-1 {
          & .group-data {
            & .firstName {
              grid-column: 1/3;
            }
            & .lastName {
              grid-column: 3/6;
            }
          }
        }
      }

      & .buttonator {
        flex-direction: row;

        & button {
          width: 48%;
        }
      }
    }
  }
}
</style>
