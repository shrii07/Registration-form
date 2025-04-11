export default function InputField({ label, type, placeholder }) {
    return (
      <div>
        <label className="block text-gray-700 font-medium">{label}</label>
        <input 
          type={type} 
          placeholder={placeholder} 
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required 
        />
      </div>
    );
  }
  